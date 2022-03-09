



## 使用Hardhat

1. 创建项目
``` npx hardhat ```
2. 合约编译
``` npx hardhat compile ```
3. 启动本地网络
```hardhat node ```
4. 执行部署：
```npx hardhat run script/xxx_deploy.js```
5. 测试
```npx hardhat test```

## call delegatecall send transfer
- transfer
有gas限制 2300，失败时抛出异常
- send
失败时返回false
- call
切换上下文
addr.call{value: 1ether}(“”) 功能等价 transfer(1 ether)， 但是没有 gas 限制
需要手动检查返回值
- delegatecall 
保持上下文