// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.22 <0.9.0;

contract Score {

    mapping(address=>bool) public teacherMap;

    constructor(){
        teacherMap[msg.sender]=true;
    }
    
    modifier onlyTeacher() {
        require(teacherMap[msg.sender],"You don't have permission");
        _;
    }

    mapping(address=>uint8) public studentScoreMap;
    
    // 设置并校验分数
    function setScore(address student,uint8 score)external onlyTeacher{
        require(score<=100,"Score can't larger than 100.");
        studentScoreMap[student]=score;
    }
    
    function addTeacher(address teacher,bool flag)external onlyTeacher{
        teacherMap[teacher]=flag;
    }
}

interface IScore{
    function setScore(address student,uint8 score)external;
}

contract Teacher {
    Score public score;
    constructor(){
        score = new Score();
    }
    function setScore(address teacherAdd,address student,uint8 scores)external{
        IScore(teacherAdd).setScore(student,scores);
    }
}
