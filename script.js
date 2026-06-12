<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hangyodon Portfolio</title>

<link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Prompt',sans-serif;
}

body{
    overflow-x:hidden;
    background:linear-gradient(135deg,#77d8ff,#a8ecff,#d7f7ff);
}

/* ฟองอากาศ */
.bubble{
    position:fixed;
    bottom:-100px;
    background:rgba(255,255,255,.5);
    border-radius:50%;
    animation:float linear infinite;
}

@keyframes float{
    from{
        transform:translateY(0);
    }
    to{
        transform:translateY(-120vh);
    }
}

.hero{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:20px;
    position:relative;
}

.card{
    background:rgba(255,255,255,.25);
    backdrop-filter:blur(15px);
    border-radius:35px;
    padding:50px;
    max-width:800px;
    width:90%;
    box-shadow:0 10px 40px rgba(0,0,0,.15);
    animation:fadeUp 1s ease;
}

@keyframes fadeUp{
    from{
        opacity:0;
        transform:translateY(40px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}

.hangyodon{
    font-size:90px;
    animation:bounce 2.5s infinite;
}

@keyframes bounce{
    0%,100%{
        transform:translateY(0);
    }
    50%{
        transform:translateY(-15px);
    }
}

h1{
    color:#006b94;
    font-size:3rem;
    margin-top:10px;
}

.typing{
    color:#005678;
    font-size:1.2rem;
    min-height:40px;
    margin:20px 0;
    font-weight:600;
}

.btn{
    display:inline-block;
    padding:14px 35px;
    border-radius:30px;
    background:#00b7ff;
    color:white;
    text-decoration:none;
    transition:.3s;
    box-shadow:0 0 20px rgba(0,183,255,.5);
}

.btn:hover{
    transform:scale(1.1);
    box-shadow:0 0 35px rgba(0,183,255,.8);
}

.section{
    max-width:1000px;
    margin:auto;
    padding:30px;
}

.box{
    background:white;
    border-radius:25px;
    padding:30px;
    margin:25px 0;
    box-shadow:0 5px 20px rgba(0,0,0,.08);
    transition:.4s;
}

.box:hover{
    transform:translateY(-10px);
}

.box h2{
    color:#0077a7;
    margin-bottom:15px;
}

.skill-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(140px,1fr));
    gap:15px;
}

.skill{
    background:#dff7ff;
    padding:15px;
    border-radius:15px;
    text-align:center;
    font-weight:bold;
    color:#006b94;
}

footer{
    text-align:center;
    padding:40px;
    color:#006b94;
    font-weight:600;
}
</style>
</head>
<body>

<!-- ฟองอากาศ -->
<script>
for(let i=0;i<25;i++){
    let bubble=document.createElement("div");
    bubble.className="bubble";
    let size=Math.random()*60+20;

    bubble.style.width=size+"px";
    bubble.style.height=size+"px";
    bubble.style.left=Math.random()*100+"vw";
    bubble.style.animationDuration=(Math.random()*10+8)+"s";

    document.body.appendChild(bubble);
}
</script>

<section class="hero">
    <div class="card">

        <div class="hangyodon">🐟</div>

        <h1>น.ส. จิราพร แซ่อึ๊ง</h1>

        <div class="typing"></div>

        <a href="#about" class="btn">เริ่มสำรวจ ✨</a>

    </div>
</section>

<div class="section">

    <div class="box" id="about">
        <h2>🌊 About Me</h2>
        <p>
            ยินดีต้อนรับสู่โลกของ Hangyodon!
            ฉันสนใจภาษาญี่ปุ่น เทคโนโลยี การออกแบบ
            และการพัฒนาเว็บไซต์ ชอบเรียนรู้สิ่งใหม่ ๆ
            และพัฒนาตัวเองอยู่เสมอ
        </p>
    </div>

    <div class="box">
        <h2>🎀 My Skills</h2>

        <div class="skill-grid">
            <div class="skill">JavaScript</div>
            <div class="skill">Japanese</div>
            <div class="skill">Canva</div>
            <div class="skill">GitHub</div>
        </div>
    </div>

    <div class="box">
        <h2>⭐ My Goals</h2>
        <p>
            พัฒนาทักษะด้านภาษาและการเขียนโปรแกรม
            พร้อมสร้างผลงานที่สามารถนำไปต่อยอดในอนาคตได้
        </p>
    </div>

</div>

<footer>
🐟 Hangyodon Style Portfolio © 2026
</footer>

<script>
const text =
"🐟 Hangyodon Lover • 🇯🇵 Japanese Learner • 💻 Future Developer";

let i = 0;

function typeEffect(){
    if(i < text.length){
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect,70);
    }
}
typeEffect();
</script>

</body>
</html>
