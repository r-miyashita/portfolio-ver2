<template>
    <section class="works">
        <div class="works__inner">
            <h2 class="works__ttl js-fadein15">Works</h2>

            <div class="works__cnt js-fadein15">
                <div class="works__column-1">
                    <span class="works__name">Portfolio</span>
                    <span class="works__date">2024.01</span>
                </div>
                <div class="works__column-2">
                    <div class="works__column-3">
                        <video class="works__video js-play-once" muted controls playsinline>
                            <source  src="@/assets/mv/portfolio-ver1.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div class="works__column-4">
                        <div class="works__column-6">
                            <div class="works__column-7">
                                <span class="works__label">機能</span>
                                <ul class="works__func">
                                    <li>表示切り替え（タブ）</li>
                                    <li>スライダー</li>
                                </ul>
                            </div>
                            <div class="works__column-8">
                                <span class="works__label">フレームワーク</span>
                                <ul class="works__frmwk">
                                    <li>Vue.js3( Typescript )</li>
                                </ul>
                            </div>
                        </div>
                        <div class="works__column-5">
                            <p class="works__comment">
                                List RenderingやTransisionなどの機能でマークアップ量を減らし、メンテ性を向上させたくフレームワークを採用。スライダーは「Swiper」を使用しました。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="works__cnt js-fadein15">
                <div class="works__column-1">
                    <span class="works__name">ToDo App</span>
                    <span class="works__date">2024.01</span>
                </div>
                <div class="works__column-2">
                    <div class="works__column-3">
                        <video class="works__video js-play-once" muted controls playsinline>
                            <source  src="@/assets/mv/todo-app.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div class="works__column-4">
                        <div class="works__column-6">
                            <div class="works__column-7">
                                <span class="works__label">機能</span>
                                <ul class="works__func">
                                    <li>タスクの「CRUD」</li>
                                    <li>ステータス更新( DO >> DONE )</li>
                                    <li>キーワード検索</li>
                                </ul>
                            </div>
                            <div class="works__column-8">
                                <span class="works__label">フレームワーク</span>
                                <ul class="works__frmwk">
                                    <li>Vue.js3( Typescript )</li>
                                </ul>
                            </div>
                        </div>
                        <div class="works__column-5">
                            <p class="works__comment">
                                storeライブラリ「Pinia」試用のため作成。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="works__cnt js-fadein15">
                <div class="works__column-1">
                    <span class="works__name">Portfolio-ver2</span>
                    <span class="works__date">2024.02</span>
                </div>
                <div class="works__column-2">
                    <div class="works__column-3">
                        <video class="works__video js-play-once" muted controls playsinline>
                            <source  src="@/assets/mv/portfolio-ver2.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div class="works__column-4">
                        <div class="works__column-6">
                            <div class="works__column-7">
                                <span class="works__label">機能</span>
                                <ul class="works__func">
                                    <li>スクロールイベント</li>
                                </ul>
                            </div>
                            <div class="works__column-8">
                                <span class="works__label">フレームワーク</span>
                                <ul class="works__frmwk">
                                    <li>Vue.js3( Typescript )</li>
                                </ul>
                            </div>
                        </div>
                        <div class="works__column-5">
                            <p class="works__comment">
                                前回はvue機能の transition を使いセクション単位でスクロールイベントの設定をしていましたが、今回はIntersectionObserverを使ってより細かい粒度でイベントハンドリングを行いました。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="works__cnt js-fadein15">
                <div class="works__column-1">
                    <span class="works__name">API Test</span>
                    <span class="works__date">2024.03</span>
                </div>
                <div class="works__column-2">
                    <div class="works__column-3">
                        <video class="works__video js-play-once" muted controls playsinline>
                            <source  src="@/assets/mv/api-test.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div class="works__column-4">
                        <div class="works__column-6">
                            <div class="works__column-7">
                                <span class="works__label">機能</span>
                                <ul class="works__func">
                                    <li>検索機能( Laravel )</li>
                                    <li>ソート機能( Vue )</li>
                                    <li>CRUD機能( Vue-Laravel )</li>
                                </ul>
                            </div>
                            <div class="works__column-8">
                                <span class="works__label">フレームワーク</span>
                                <ul class="works__frmwk">
                                    <li>Vue.js3( Typescript )</li>
                                    <li>Laravel( Ver6 )</li>
                                </ul>
                            </div>
                        </div>
                        <div class="works__column-5">
                            <p class="works__comment">
                                サーバーサイドとのAPI連携学習のため作成。「 axios 」を利用してVue側からHTTPリクエストを送信しています。Laravel側はリクエスト処理用のルーティング・モデル・コントローラ作成を行いました。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="works__cnt js-fadein15">
                <div class="works__column-1">
                    <span class="works__name">API Test - Express</span>
                    <span class="works__date">2024.04</span>
                </div>
                <div class="works__column-2">
                    <div class="works__column-3">
                        <video class="works__video js-play-once" muted controls playsinline>
                            <source  src="@/assets/mv/api-test-express.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div class="works__column-4">
                        <div class="works__column-6">
                            <div class="works__column-7">
                                <span class="works__label">機能</span>
                                <ul class="works__func">
                                    <li>認証機能( Express )</li>
                                    <li>CRUD機能( Express )</li>
                                </ul>
                            </div>
                            <div class="works__column-8">
                                <span class="works__label">フレームワーク</span>
                                <ul class="works__frmwk">
                                    <li>Vue.js3( Typescript )</li>
                                    <li>Express( Ver4 )</li>
                                </ul>
                            </div>
                        </div>
                        <div class="works__column-5">
                            <p class="works__comment">
                                認証機能およびDocker学習のため作成。
                                <br>Docker => 「front/ web-server/ back/ db」の構成。web-serverはnginxを使用。
                                <br>Express => ORM: prisma経由でMySQLを操作。認証APIはセッション認証を用いて実装。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>