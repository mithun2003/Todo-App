from django.urls import path
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView,
                                            TokenVerifyView, TokenBlacklistView)
from .views import *

urlpatterns = [
    path('signup/', SignUp.as_view()),
    path('login/', Login.as_view()),
    path('logout/', Logout.as_view(), name='user_logout'),
    path('users/', Users.as_view()),
    path('token-refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token-verify/', TokenVerifyView.as_view(), name='token_verify'),
]