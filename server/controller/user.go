package controller

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"server/model"
)

// gin.Context，封装了request和response
func SignUp(c *gin.Context) {
	log.Println(c)
	// 从请求中获取数据
	signUp := model.SignUp{}
	c.BindJSON(&signUp)
	// 写入数据库
	err := model.CreateUser(&signUp)
	// 返回响应
	if err != nil {
		c.JSON(http.StatusOK, gin.H{
			"code": http.StatusInternalServerError,
			"msg":  err.Error(),
		})
	} else {
		c.JSON(http.StatusOK, gin.H{
			"code": http.StatusOK,
			"msg":  "注册成功！",
			"data": gin.H{
				"test": "sign up",
			},
		})
	}
}
