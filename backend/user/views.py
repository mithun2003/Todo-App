from django.contrib.auth import authenticate, login, logout
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import *
from .serialiers import *

{
    "email": "bidyutmaji5@gmail.com",
    "password": "JPS@bidyut108",
    "first_name": "Radha",
    "last_name": "Madhava",
}


class SignUp(GenericAPIView):
    serializer_class = SignupSerializer

    def post(self, request):
        data = request.data
        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            user = TodoUser.objects.create_user(**serializer.validated_data)

            print("USER", user)
            response = {"message": user.email}
            return Response(response, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Login(GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        data = request.data 
        serializer = self.serializer_class(data = data)
        try:
            serializer.is_valid(raise_exception=True)
        except ValidationError as e:
            return Response({'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        user = serializer.validated_data['user']
        refresh = RefreshToken.for_user(user)
        

        return Response({'message': 'Login successful','email':user.email, 'access': str(refresh.access_token), 'refresh': str(refresh)})


class Logout(APIView):
    def post(self, request):
        print(request.user)
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            logout(request)
            print(request.user)
            return Response({'message':'logout successfully'},status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response({'messages':'You Have to login first'},status=status.HTTP_400_BAD_REQUEST)

class Users(APIView):
    serializer_class = UserSerializer
    def get(self, request):
        user = TodoUser.objects.all()
        if user.exists():
            serializer = self.serializer_class(user, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
