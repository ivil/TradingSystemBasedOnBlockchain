package controller

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"server/model"
)

// 存储合约地址,大写开头才表示导出
func StoreContractAddress(c *gin.Context) {
	contract := model.Contract{}
	c.BindJSON(&contract)
	err := model.AddContractAddress(&contract)
	if err != nil {
		c.JSON(http.StatusOK, gin.H{
			"code": http.StatusInternalServerError,
			"msg":  err.Error(),
		})
	} else {
		c.JSON(http.StatusOK, gin.H{
			"code": http.StatusOK,
			"msg":  "合约地址提交成功！",
		})
	}
}

func GetContractAddress(c *gin.Context) {
	address, err := model.ReadContractAddress()
	if err != nil {
		c.JSON(http.StatusOK, gin.H{
			"code": http.StatusInternalServerError,
			"msg":  err.Error(),
		})
	} else {
		c.JSON(http.StatusOK, gin.H{
			"code": http.StatusOK,
			"msg":  "获取合约地址成功！",
			"data": address,
		})
	}
}
