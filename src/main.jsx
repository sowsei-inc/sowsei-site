import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';

const Product=({name,desc,kind,href}) => (
  <a className={"product "+kind} href={href}>
    <strong>{name}</strong><span>{desc}</span><b>→</b>
  </a>
);

function App(){
  return <div>
    <header><a href="#top">株式会社創正</a><nav><a href="#products">事業・製品</a><a href="#about">会社</a><a href="#contact">連絡</a></nav></header>
    <main id="top">
      <section className="hero">
        <div><small>株式会社創正</small><h1>つくる。<br/>なおす。<br/>考える。</h1><p>株式会社創正は、対象に合わせてものを作り、考え、仕事をしています。</p></div>
        <aside><strong>創正</strong><span>2026</span></aside>
      </section>
      <section className="products" id="products">
        <div className="section-head"><small>事業・製品</small><h2>いま、やっていること。</h2></div>
        <div className="product-list">
          <Product name="Iro" desc="ことばで選んで、ちょうどいい色へ。" kind="yellow" href="#contact"/>
          <Product name="Sousei-line" desc="ソフトウェアの製造・検品工程" kind="blue" href="#contact"/>
        </div>
      </section>
      <section className="about" id="about"><small>会社について</small><h2>株式会社創正</h2><p>代表取締役　山下 正人<br/>所在地　神奈川県秦野市</p></section>
      <section className="contact" id="contact"><small>お問い合わせ</small><h2>仕事や製品について、<br/>ご連絡ください。</h2><a href="mailto:info@sowsei.jp">info@sowsei.jp →</a></section>
    </main>
    <footer><b>株式会社創正</b><span>© 2026</span></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
