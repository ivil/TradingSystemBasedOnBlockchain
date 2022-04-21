package router

import (
	"github.com/gin-gonic/gin"
	"server/controller"
)

func userRouter(r *gin.Engine) {
	// 路由组
	userGroup := r.Group("user")
	{
		// 注册
		userGroup.POST("/signUp", controller.SignUp)
		// 登录
		userGroup.POST("/signIn", controller.SignIn)
	}
}
