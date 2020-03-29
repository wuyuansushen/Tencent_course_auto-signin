let SFlower = self.setInterval(sendFlower, 30000);
function sendFlower()
{
    let elements = document.getElementsByClassName("toolbar-icon");
    for(let i=0; i<elements.length; i++){
        let classElement = elements[i];
        let flowerDate=new Date();
        if (classElement.title=="献花")
        {
            classElement.click();
            console.log("送花成功"+flowerDate.toLocaleTimeString());
        }
    }
}

let tencentCourse=self.setInterval(signInFunction,45000)
function signInFunction() {
    /*需要等待抓签到窗体的源代码确定 类名 方法:F12打开以后，右键Copy-OuterHTML复制下来即可*/
    let signInElements=document.getElementsByClassName("s-btn s-btn--primary s-btn--m");
    let nowDate=new Date();
    if (signInElements.length != 0)
    {
        for(let i=0;i<signInElements.length;i++)
        {
            if (signInElements[i].innerHTML=="签到")
            {
                signInElements[i].click();
                console.log("签到成功!...."+nowDate.toLocaleTimeString());
            }
            else if (signInElements[i].innerHTML=="确定")
            {
                signInElements[i].click();
                console.log("签到完成并已确认!...."+nowDate.toLocaleTimeString());
            }
        }
    }
    else
    {
        console.log("暂无签到...."+nowDate.toLocaleTimeString());
    }
}