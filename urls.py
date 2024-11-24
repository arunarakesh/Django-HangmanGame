from django.urls import path
from . import views
from .views import redirect_view
from django.conf.urls.static import static


urlpatterns = [
    path('hangman/',views.hang_man, name='hang_man'),
    path('hangtheme/',views.hang_theme, name='hang_theme'),
    path('playgame/',views.play_game,name='play_game'),
    path('setting/',views.setting,name='setting'),
    path('redirect/', redirect_view)
] 