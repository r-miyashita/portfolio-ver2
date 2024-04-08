<template>
<section class="skills"> 
    <div class="skills__inner">
        <h2 class="skills__ttl js-fadein15">私にできること</h2>
        <div class="skills__column">
            <div class="skills__column-1 js-fadein15">

                <div class="skills__icatch">
                    <div class="skills__tree">
                        <p class="skills__category">Front -end</p>
                        <ul class="skills__layer1 m--front">

                            <li><span class="skills__label js-lbl-anim-ph1">HTML</span></li>
                            <li>
                                <span class="skills__label js-lbl-anim-ph1">CSS</span>
                                <ul class="skills__layer2 js-lbl-anim-ph2">
                                    <li><span class="skills__label js-lbl-anim-ph2">Sass</span></li>
                                </ul>
                            </li>
                            <li>
                                <div class="skills__cnt js-fadein15">
                                    <ul class="skills__list">
                                        <li class="skills__item"><p>ー  デザインカンプからのサイト作成</p></li>
                                        <li class="skills__item"><p>ー  レスポンシブ対応</p></li>
                                        <li class="skills__item"><p>ー  Sassでのコーディング可</p></li>
                                    </ul>
                                    <p class="skills__detail">
                                        クラス命名はBEMをベースとし、レイアウトやコンポーネントなどの棲み分けや再利用性など意識をしてコーディングに取り組んでいます。
                                    </p>
                                </div>
                            </li>

                            <li>
                                <span class="skills__label js-lbl-anim-ph1">JavaScript</span>
                                <ul class="skills__layer2 js-lbl-anim-ph2">
                                    <li><span class="skills__label js-lbl-anim-ph2">TypeScript</span></li>
                                </ul>
                            </li>
                            <li>
                                <div class="skills__cnt js-fadein15">
                                    <ul class="skills__list">
                                        <li class="skills__item"><p>ー  フレームワーク開発( Vue3 )</p></li>
                                        <li class="skills__item"><p>ー  リアクティブな単純機能作成</p></li>
                                        <li class="skills__item"><p>ー  バックエンド( 外部API )連携</p></li>
                                    </ul>
                                    <p class="skills__detail">
                                        フレームワーク用いてのサイト制作やリスト作成・検索機能の実装が可能です。型宣言エラーを回避できる程度の知見となりますが、TypeScriptで記述を行なえます。
                                        <br>バックエンド連携についてはLaravel( Mysql )で学習を行なっており、現時点では「Inertia or axios」で単純なCRUD機能の実装ができる状態です。
                                    </p>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
                <!-- column1ここまで -->
            </div>

            <div class="skills__column-2 js-fadein15">

                <div class="skills__icatch">
                    <div class="skills__tree">
                        <p class="skills__category">Back -end</p>
                        <ul class="skills__layer1 m--back">

                            <li><span class="skills__label js-lbl-anim-ph1">PHP</span></li>
                            <li>
                                <div class="skills__cnt js-fadein15">
                                    <ul class="skills__list">
                                        <li class="skills__item"><p>ー  フレームワーク開発( Laravel )</p></li>
                                        <li class="skills__item"><p>ー  Vue3連携( API作成 )</p></li>
                                    </ul>
                                    <p class="skills__detail">
                                        Laravelは簡単なMVC構築( ver6 )、Inertia用いたVue連携( ver9 )で利用した経験があります。
                                        <br>API作成についてはver6にて、(ユーザのログイン状態など考慮しないような)単純な連携であれば実装可能です。
                                    </p>
                                </div>
                            </li>

                            <li><span class="skills__label js-lbl-anim-ph1">JavaScript</span></li>
                            <li>
                                <div class="skills__cnt js-fadein15">
                                    <ul class="skills__list">
                                        <li class="skills__item"><p>ー  フレームワーク開発( Express )</p></li>
                                        <li class="skills__item"><p>ー  Vue3連携( API作成 )</p></li>
                                    </ul>
                                    <p class="skills__detail">
                                        サーバーサイドの知識習得および言語自体への理解を深めることを目的に利用しています。
                                    </p>
                                </div>
                            </li>
                            

                            <li><span class="skills__label js-lbl-anim-ph1">SQL</span></li>
                            <li>
                                <div class="skills__cnt js-fadein15">
                                    <ul  class="skills__list">
                                        <li class="skills__item"><p>ー  基本設計~リリース</p></li>
                                        <li class="skills__item"><p>ー  ETL開発</p></li>
                                        <li class="skills__item"><p>ー  性能改善</p></li>
                                    </ul>
                                    <p class="skills__detail">
                                        バッチジョブの開発をメインに経験しています。ETL用いた異DB間のデータ連携やファイル入出力を行う処理の作成に携わらせていただきました。
                                        <br>検証環境がLinuxの案件もあったため winscp や teraterm を使っての作業も可能です。
                                        <br>（SqlServer, MySQL, Teradataなど。）
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- column2ここまで -->
            </div>
        </div>
    </div>
</section>
</template>