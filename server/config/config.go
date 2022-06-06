package config

type Config struct {
	username string
	password string
	host     string
	port     string
	database string
	charest  string
}

// 需要用函数来包含，不能在函数外执行赋值，调用等操作

var config = Config{
	username: "ivil",
	password: "ivil.world",
	host:     "127.0.0.1",
	port:     "3306",
	database: "ivil.world",
	charest:  "utf8",
}

var DbConfig = config.username + ":" + config.password + "@" + "tcp(" + config.host + ":" + config.port + ")/" + config.database + "?charset=" + config.charest
