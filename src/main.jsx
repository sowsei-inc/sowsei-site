import React from'react';import{createRoot}from'react-dom/client';import'./style.css';

const Item=({name,desc,tone})=><a className={"item "+tone} href="#"><span className="itemName">{name}</span><span className="itemDesc">{desc}</span><b>→</b></a>;

function App(){return <><header><a className="brand" href="#top">株式会社創正</a><nav><a href="#work">事業・製品</a><a href="#company">会社</a><a href="#contact">連絡</a></nav></header><main id="top">
<section className="hero"><div className="heroCopy"><small>株式会社創正</small><h1>つくる。<br/>なおす。<br/>考える。</h1><p>ソフトウェアや電子機器など、対象に合わせて仕事をしています。</p></div><div className="heroBlock"><span>創正</span><i>2026</i></div></section>
<section id="work" className="work"><div className="sectionTitle"><small>事業・製品</small><h2>いま、やっていること。</h2><p>詳しい情報は、それぞれのページへ。</p></div><div className="items"><Item name="Iro" desc="アプリ" tone="yellow"/><Item name="Sousei-line" desc="ソフトウェアの製造・検品工程" tone="blue"/><Item name="電子機器" desc="修理・製作など" tone="pink"/></div></section>
<section id="company" className="company"><div className="companyLead"><small>会社について</small><h2>株式会社創正</h2></div><div className="companyBody"><p>神奈川県にある会社です。</p><dl><div><dt>会社名</dt><dd>株式会社創正</dd></div><div><dt>代表者</dt><dd>山下 正人</dd></div></dl></div></section>
<section id="contact" className="contact"><small>お問い合わせ</small><div><h2>仕事や製品について、<br/>ご連絡ください。</h2><a href="#">連絡する <b>→</b></a></div></section>
</main><footer><b>株式会社創正</b><span>© 2026</span></footer></>};createRoot(document.getElementById('root')).render(<App/>);