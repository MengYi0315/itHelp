const data = [
    {
        "title": "python抓網站資料的問題", 
        "member": "Kevin_0",
        "date": "2024-09-13",
        "like": "0",
        "answer": "0",
        "scan": "45",
        "tag": ["pd.read_html"]
    }, 
    {
        "title": "在多層次QThread中readyreadstandardoutput無法正常輸出", 
        "member": " gt55123",
        "date": "2024-09-13",
        "like": "0",
        "answer": "0",
        "scan": "103",
        "tag": ["pyqt5","qthread", "python3", "readyreadstandardoutput", "linux"]
    }, 
    {
        "title": "登錄電腦的Line後,無法直接從電腦傳檔案給line聯絡人,請問是否有解決方式?", 
        "member": "li-wen-chou",
        "date": "2024-09-13",
        "like": "0",
        "answer": "0",
        "scan": "178",
        "tag": ["line"]
    },
    {
        "title": "結構描述 'dbo'，資料庫 'TEST DB'，物件 'company' 沒有 SELECT 權限。", 
        "member": "ejious",
        "date": "2024-09-13",
        "like": "0",
        "answer": "1",
        "scan": "199",
        "tag": ["結構描述 'dbo'"]
    },
    {
        "title": "請問 ngnix 如何使用 iis 的 ssl", 
        "member": "小MIS",
        "date": "2024-09-12",
        "like": "0",
        "answer": "1",
        "scan": "356",
        "tag": ["ngnix"]
    },
    {
        "title": "Jquery 如何串多個物件", 
        "member": "noway",
        "date": "2024-09-12",
        "like": "0",
        "answer": "1",
        "scan": "319",
        "tag": ["jquery", "共用串接"]
    },
    {
        "title": "請問AI工具Codeium和Copilot哪一個好用?", 
        "member": "baltic",
        "date": "2024-09-12",
        "like": "2",
        "answer": "1",
        "scan": "701",
        "tag": ["ai工具", "codeium", "copilot"]
    },
];

const tags = ["15th鐵人賽", "13th鐵人賽", "14th鐵人賽", "12th鐵人賽", "11th鐵人賽", "鐵人賽", "2019鐵人賽", "javascript", "2018鐵人賽", "16th鐵人賽", "python", "2017鐵人賽", "windows", "php", "c#"];


window.onload = function() {
    const list = document.querySelector('#QAList');
    const tagList = document.querySelector('#hotTagContent');

    list.innerHTML = '';
    tagList.innerHTML = '';
    
    data.forEach((item) => {
        console.log(item.tag);

        const tagsHTML = item.tag.map((tag) => `<div class="tag">${tag}</div>`).join('');
        list.innerHTML += 
        `
            <div class="QAItem flex">
                <div class="col like flex">
                    <div class="number">${item.like}</div>
                    <div>Like</div>
                </div>
                <div class="col answer flex">
                    <div class="number">${item.answer}</div>
                    <div>回答</div>
                </div>
                <div class="col scan flex">
                    <div class="number">${item.scan}</div>
                    <div>瀏覽</div>
                </div>
                <div class="flex" style="flex-direction: column; width: 100%;">
                    <div class="title">
                        ${item.title}
                    </div>
                    <div class="flex" style="flex-wrap: wrap;">
                        ${tagsHTML}
                        <div class="dateAndMemberDiv">
                            <span>${item.date}</span>
                            <span> ‧ 由</span>
                            <span class="name">${item.member}</span>
                            <span> 提問</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // data.tag.forEach((tag) => {
        //     console.log(tag);
        // });


    });

    tags.forEach((tag) => {
        tagList.innerHTML += 
        `
            <div class="tag">${tag}</div>
        `;
    });

}