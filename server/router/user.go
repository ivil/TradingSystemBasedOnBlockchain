package router

import (
	"server/controller"

	"github.com/gin-gonic/gin"
)

func userRouter(r *gin.Engine) {
	r.GET("/test", controller.Test)

	// 路由组
	userGroup := r.Group("user")
	{
		// 待办事项
		// 添加
		userGroup.POST("/signUp", controller.SignUp)
	}
}
