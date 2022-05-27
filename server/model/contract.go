package model

import (
	"errors"
	"log"
	"server/dao/mysql"
)

type Contract struct {
	ContractAddress string `json:"contractAddress" binding:"required"`
}

// 新增合约地址,go语言中大写开头表示暴露出去，小写开头则不暴露
func AddContractAddress(contract *Contract) (err error) {
	statement, err := mysql.DB.Prepare("insert into contract set contractAddress=?")
	if err != nil {
		log.Println("注册预编译SQL语句出错！")
	}
	res, err := statement.Exec(contract.ContractAddress)
	if err != nil {
		log.Println("执行SQL语句出错！")
	} else {
		log.Println(res.LastInsertId())
	}
	return err
}

// 读取合约地址
func ReadContractAddress() (address string, err error) {
	rows, err := mysql.DB.Query("select contractAddress from contract")
	if err != nil {
		return "", errors.New("获取合约地址出错！")
	} else {
		var addresses []string
		var address string
		for rows.Next() {
			rows.Scan(&address)
			addresses = append(addresses, address)
		}
		log.Println(addresses)
		return addresses[0], nil
	}
}
