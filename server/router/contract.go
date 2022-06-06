package router

import (
	"github.com/gin-gonic/gin"
	"server/controller"
)

func contractRouter(r *gin.Engine) {
	// 路由组
	contractGroup := r.Group("contract")
	{
		//新增合约地址
		contractGroup.POST("/addAddress", controller.StoreContractAddress)
		//新增合约地址
		contractGroup.GET("/getAddress", controller.GetContractAddress)
	}
}
