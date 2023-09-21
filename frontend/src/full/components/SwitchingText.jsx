import React, { useEffect } from "react";
import "../css/switchingText.css";

const SwitchingText = () => {
    useEffect(() => {
        // spanタグに分割
        let splitTarget = document.querySelectorAll(".js-splitText"); //ターゲットとなる要素を全取得
        splitTarget.forEach((target) => {
            //target = ターゲット

            if (!target.classList.contains("is-active")) {
                //ターゲットが'is-active'を持っていない場合
                let newText = ""; //生成する要素を格納するための変数
                let spanText = target.innerHTML; //ターゲットの中身を取得
                spanText.split("").forEach((char) => {
                    //char = character 文字
                    newText += "<span>" + char + "</span>"; //一文字ずつspanタグで囲む
                });
                let newTextBefore = '<div class="before">' + newText + "</div>"; //beforeクラスをつけた要素を生成
                let newTextAfter = '<div class="after">' + newText + "</div>"; //afterクラスをつけた要素を生成
                newText =
                    '<span class="text-wrap">' +
                    newTextBefore +
                    newTextAfter +
                    "</span>"; //before after両要素を囲む要素生成
                target.innerHTML = newText; //ターゲットに生成した要素を挿入
            }
        });

        //ターゲットにホバーした時の動き
        splitTarget.forEach((target) => {
            if (!target.classList.contains("is-active")) {
                //ターゲットが'is-active'を持っていない場合
                let beforeSpan = target
                    .querySelector(".before")
                    .querySelectorAll("span");
                //beforeの中にあるspanタグを全取得
                let afterSpan = target
                    .querySelector(".after")
                    .querySelectorAll("span");
                //afterの中にあるspanタグを全取得

                target.addEventListener("mouseenter", () => {
                    //ホバーしたとき
                    gsap.to(beforeSpan, {
                        y: "-100%",
                        stagger: 0.03,
                        ease: "power2.out",
                    });
                    //0.03秒おきに各spanタグをy軸上に移動
                    gsap.to(afterSpan, {
                        y: "0%",
                        stagger: 0.03,
                        ease: "power2.out",
                    });
                });

                target.addEventListener("mouseleave", () => {
                    //ホバーが外れたとき
                    gsap.to(beforeSpan, {
                        y: "0%",
                        stagger: 0.03,
                        ease: "power2.out",
                    });
                    //0.03秒おきに各spanタグをy軸上に移動
                    gsap.to(afterSpan, {
                        y: "100%",
                        stagger: 0.03,
                        ease: "power2.out",
                    });
                });
            }
        });
    }, []);

    return (
        <div>
            <header className="p-header">
                <nav className="p-header__nav p-nav">
                    <ul className="p-nav__lists">
                        <li className="p-nav__list">
                            <a className="js-splitText is-active" href="./">
                                ASHOT
                            </a>
                        </li>
                        <li className="p-nav__list">
                            <a className="js-splitText" href="./">
                                お知らせ
                            </a>
                        </li>
                        <li className="p-nav__list">
                            <a className="js-splitText" href="./">
                                商品情報
                            </a>
                        </li>
                        <li className="p-nav__list">
                            <a className="js-splitText" href="./">
                                ヒストリー
                            </a>
                        </li>
                        <li className="p-nav__list">
                            <a className="js-splitText" href="./">
                                ご予約
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default SwitchingText;
