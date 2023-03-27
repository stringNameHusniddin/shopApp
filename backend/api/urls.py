from django.urls import include, path
from .views import ItemView, UserView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('api/item', ItemView)
router.register('api/user', UserView)



urlpatterns = router.urls