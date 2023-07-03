from rest_framework.views import APIView
from rest_framework.response import  Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import GenericAPIView
from rest_framework import status

from .models import *
from .serializers import *

# Create your views here.
class CreateTodo(GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = TodoSerializer

    def post(self, request):
        data = request.data
        print(request.data)
        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        else:
            return Response(serializer.errors)

class ListTodo(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        user = request.user
        todos = Todo.objects.filter(user=user).order_by('-id')
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data)

class UpdateTodo(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, id):
        todo  = Todo.objects.get(id=id)
        serializer = TodoSerializer(todo)
        return Response(serializer.data)
            
    def patch(self,request,id):
        print(request.data)
        try:
            todo = Todo.objects.get(pk=id)
        except Todo.DoesNotExist:
            return Response({'message': 'Todo not found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = TodoSerializer(todo,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class DeleteTodo(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, id):
        try:
            todo = Todo.objects.get(id=id)
            todo.delete()
            return Response({'message': 'Todo Deleted'})
        except Todo.DoesNotExist:
            return Response({'error': 'Todo not found'}, status=404)


class CompleteTodo(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        todos = Todo.objects.filter(is_completed=True,user_id=request.user.id)
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data)

