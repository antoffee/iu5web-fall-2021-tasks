from django.contrib import admin
from django.urls import path, include
from musicians import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name="main"),
    path('musician/', include([
        path('', views.read_musician, name='read_musician'),
        path('create/', views.create_musician, name="create_musician"),
        path('update/<int:musician_id>/', views.update_musician, name="update_musician"),
        path('delete/<int:musician_id>/', views.delete_musician, name="delete_musician"),
    ])),
    path('orchestra/', include([
        path('', views.read_orchestra, name='read_orchestra'),
        path('create/', views.create_orchestra, name="create_orchestra"),
        path('update/<int:orchestra_id>/',
             views.update_orchestra, name="update_orchestra"),
        path('delete/<int:orchestra_id>/',
             views.delete_orchestra, name="delete_orchestra"),
    ])),
    path('report/', views.report, name="report"),
]
