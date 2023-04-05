import style from '../src/styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/link';

import NextIcon from '../public/NextIcon.png'
import ReactIcon from '../public/ReactIcon.png'
import Adrian from '../public/Adrian.jpg'
import ecomm from '../public/ecomm.png'
import urban from '../public/urban.png'
import lottery from '../public/lottery.png'
import genesys from '../public/genesys.png'
import joseph from '../public/joseph.jpg'

export default function Main() {

    return (
        <div className={style.wrappermain}>
            <div className={style.introwrap}>
                <div className={style.introcontainer}>
                    <h2>HI, MY NAME IS</h2>
                    <h1>Adrian Paun.</h1>
                    <h1>I am a </h1>
                    <h1>full stack developer.</h1>
                    <p>I like to create user-friendly websites and innovative web3</p>
                    <p>applications.</p>
                    <p>What I love about this field is that everyday there is always</p> 
                    <p>something new to learn. I always try to improve myself</p> 
                    <p>more and take the next steps further.</p>
                </div>
                <div className={style.introbuttonwrap}>
                    <Link href="https://www.linkedin.com/in/adrian-paun-b9065025a/" target="_blank" rel="noopener noreferrer">
                        <button className={style.buttonintro}>Do you want to work with me?</button>
                    </Link>
                </div>
            </div>

            <br/>

            <div className = {style.wrapicons}>
                <div className={style.icon}>
                    <Image src={NextIcon}
                        alt="Next Icon"
                        width="128"
                        height="128"
                        className={style.icon}
                    />
                </div>
                <div className={style.icon}>
                    <Image src={ReactIcon}
                        alt="React Icon"
                        width="128"
                        height="128"
                        className={style.icon}
                    />
                </div>
            </div>

            <br/>
            <br/>

            <div className={style.biowrapper}>
                <div className={style.pic}>
                    <Image src={Adrian}
                        alt="Adrian Pic"
                        width="450"
                        height="300"
                        className={style.imgadrian}
                    />
                </div>
                <div className={style.biotext}>
                    <p>
                    I've been coding since 2022. I'm a web developer who loves building full-stack applications & learning new technologies.
                    Wherever you're looking for a freelancer to work on your web3 project, or join your company, or seeking to hire a skilled developer for business websites that are not web3 related, I'd be thrilled to discuss how I can help bring your ideas to life.
                    When I'm not coding, I travel, and also take care of my hobby as a music producer.
                    </p>
                    <br/>
                    <p>My preferred tools of choice are:</p>
                    <br />
                    <div className={style.tablewrap}>
                        <ul className={style.list}>
                            <il><span className={style.checkmark}>&#10003;</span> Javascript</il>
                        </ul>
                        <ul className={style.list}>
                            <il><span className={style.checkmark}>&#10003;</span> NextJS / React / Contexts</il>
                        </ul>
                        <ul className={style.list}>
                            <il><span className={style.checkmark}>&#10003;</span> Solidity / Hardhat</il>
                        </ul>
                        <ul className={style.list}>
                            <il><span className={style.checkmark}>&#10003;</span> Firebase</il>
                        </ul>
                    </div>
                    <div className={style.introbuttonwrap}>
                        <Link href="https://github.com/Hadriani" target="_blank" rel="noopener noreferrer">
                            <button className={style.buttonintro2}>My Github</button>
                        </Link>
                    </div>
                </div>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <div className={style.breakline}/>
            <br/>
            <br/>
            <br/>
            <div className={style.headerprojects}>
                <div className={style.header3wrap}>
                    <h3 className={style.header3}>My Coding Projects</h3>
                </div>
            </div>
            <br/>
            <br/>
            <div className={style.biowrapper}>
                <div className={style.pic}>
                    <Image src={ecomm}
                        alt="Ecomm Pic"
                        width="500"
                        height="250"
                        className={style.imgadrian}
                    />
                </div>
                <div className={style.biotext}>
                    <h1 className={style.titleprojects}>Romdale Store</h1>
                    <p>
                        A detailed e-commerce store I built from scratch using Next.js and React Contexts. 
                        You can navigate only from homepage to collections: hats, shoes, ID dynamic route for each item, authentication page, other route pages, checkout page, wishlist page only for functionalities and viewing. Payment not available yet.
                        Project is supported on desktop browsers only, not supported on mobile versions. Site deployed with Vercel. Added the github repo link from this project as well.
                        Tools used:
                    </p>
                 
                    <div className={style.introbuttonwrap}>
                        <Link href="https://github.com/Hadriani/Romdale-Store" target="_blank" rel="noopener noreferrer">
                            <button className={style.buttonintro3}>Github Repo</button>
                        </Link>
                    </div>
                    <br />
                    <div className={style.tablewrap}>
                        <ul className={style.list}>
                            <il><span className={style.checkmark}>&#10003;</span> NextJS / React Context</il>
                        </ul>
                        <ul className={style.list}>
                            <il><span className={style.checkmark}>&#10003;</span> Firebase</il>
                        </ul>
                        <ul className={style.list}>
                            <il><span className={style.checkmark}>&#10003;</span> CSS</il>
                        </ul>
                        <ul className={style.list}>
                            <il><span className={style.checkmark}>&#10003;</span> Javascript</il>
                        </ul>
                    </div>
                    <div className={style.introbuttonwrap}>
                        <Link href="https://romdale-store.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <button className={style.buttonintro2}>View Demo</button>
                        </Link>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className={style.biowrapper}>
                <div className={style.pic2}>
                    <Image src={lottery}
                        alt="Lottery Pic"
                        width="500"
                        height="250"
                        className={style.imgadrian}
                    />
                </div>
                <div className={style.biotext2}>
                    <h1 className={style.titleprojects}>Adrian Casino</h1>
                    <p>
                        A lottery dApp game I did, using front-end web3.js, Next.js, Solidity, Alchemy & Etherscan API, authentication with Metamask, Javascript and CSS for styling. Smart contract verified and deployed on Ethereum Sepolia Test Network Chain. Read "Instructions" from the page of how the game works.
                        Project is supported on both desktop browsers and mobile versions.
                        Tools used:
                    </p>

                    <div className={style.introbuttonwrap}>
                        <Link href="https://github.com/Hadriani/Full-Stack-Lottery-dApp-Solidity-v0.8.18" target="_blank" rel="noopener noreferrer">
                            <button className={style.buttonintro3}>Github Repo</button>
                        </Link>
                    </div>
                    <br />
                    <div className={style.tablewrap}>
                        <ul className={style.list}>
                            <il><span className={style.checkmark}>&#10003;</span> NextJS / React / web3</il>
                        </ul>
                        <ul className={style.list}>
                            <il><span className={style.checkmark}>&#10003;</span> Solidity / Hardhat</il>
                        </ul>
                        <ul className={style.list}>
                            <il><span className={style.checkmark}>&#10003;</span> CSS</il>
                        </ul>
                        <ul className={style.list}>
                            <il><span className={style.checkmark}>&#10003;</span> Auth with Metamask</il>
                        </ul>
                    </div>
                    <div className={style.introbuttonwrap}>
                        <Link href="https://adriancasino.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <button className={style.buttonintro2}>View Demo</button>
                        </Link>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className={style.biowrapper}>
                <div className={style.pic}>
                    <Image src={genesys}
                        alt="Genesys Pic"
                        width="500"
                        height="250"
                        className={style.imgadrian}
                    />
                </div>
                <div className={style.biotext}>
                    <h1 className={style.titleprojects}>Genesys NFT</h1>
                    <p>
                        A minting NFT dApp I did, using front-end web3.js, React.js, Solidity, thirdweb IPFS, Infuria & Etherscan API, authentication with Metamask, Javascript and SCSS for styling. Smart contract verified and deployed on Ethereum Sepolia Test Network Chain. Read Readme.MD file from Github of how I've done it.
                        Project is supported on both desktop browsers and mobile versions.
                        Tools used:
                    </p>

                    <div className={style.introbuttonwrap}>
                        <Link href="https://github.com/Hadriani/Full-Stack-NFT-Minting-dApp" target="_blank" rel="noopener noreferrer">
                            <button className={style.buttonintro3}>Github Repo</button>
                        </Link>
                    </div>
                    <br />
                    <div className={style.tablewrap}>
                        <ul className={style.list}>
                            <il><span className={style.checkmark}>&#10003;</span> React / web3</il>
                        </ul>
                        <ul className={style.list}>
                            <il><span className={style.checkmark}>&#10003;</span> Solidity / Hardhat</il>
                        </ul>
                        <ul className={style.list}>
                            <il><span className={style.checkmark}>&#10003;</span> SCSS</il>
                        </ul>
                        <ul className={style.list}>
                            <il><span className={style.checkmark}>&#10003;</span> Auth with Metamask</il>
                        </ul>
                    </div>
                    <div className={style.introbuttonwrap}>
                        <Link href="https://genesysnftdar.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <button className={style.buttonintro2}>View Demo</button>
                        </Link>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className={style.biowrapper}>
                <div className={style.pic2}>
                    <Image src={urban}
                        alt="Urban Pic"
                        width="500"
                        height="250"
                        className={style.imgadrian}
                    />
                </div>
                <div className={style.biotext2}>
                    <h1 className={style.titleprojects}>Pro Urban Store</h1>
                    <p>
                        A sample of a small e-comm store I did, using React / Redux. Included inside: authentication with Firebase, Stripe API payment, JSX styling components and Javascript.
                        Project is supported on desktop browsers only, not supported on mobile versions. Site deployed with Netlify. Added the github repo link from this project as well.
                        Tools used:
                    </p>

                    <div className={style.introbuttonwrap}>
                        <Link href="https://github.com/Hadriani/adrian-clothing-redux-payment" target="_blank" rel="noopener noreferrer">
                            <button className={style.buttonintro3}>Github Repo</button>
                        </Link>
                    </div>
                    <br />
                    <div className={style.tablewrap}>
                        <ul className={style.list}>
                            <il><span className={style.checkmark}>&#10003;</span> React / Redux</il>
                        </ul>
                        <ul className={style.list}>
                            <il><span className={style.checkmark}>&#10003;</span> Firebase / Stripe API</il>
                        </ul>
                        <ul className={style.list}>
                            <il><span className={style.checkmark}>&#10003;</span> Javascript</il>
                        </ul>
                        <ul className={style.list}>
                            <il><span className={style.checkmark}>&#10003;</span> JSX styled-in components</il>
                        </ul>
                    </div>
                    <div className={style.introbuttonwrap}>
                        <Link href="https://pro-urban.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className={style.buttonintro2}>View Demo</button>
                        </Link>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <div className={style.breakline} />
            <br />
            <br />
            <br />
            <div className={style.headerprojects}>
                <div className={style.header3wrap}>
                    <h3 className={style.header3}>My Experience</h3>
                </div>
            </div>
            <br />
            <br />

            <div className={style.introwrap}>
                <div className={style.introcontainer}>
                    <h4>2023</h4>
                    <h5>Brainnest</h5>
                    <p> I was a part of a blockchain bootcamp training to learn the</p> 
                    <p>details in blockchain development. Learned basic and </p>
                    <p>advanced Solidity, front-end web3, solved solutions on</p> 
                    <p>project cases and we had a proper team-work where I also</p>
                    <p> helped some of my team members with their projects. Upon</p>
                    <p>finishing the training I was able to create 2 full stack dApps</p> 
                    <p>as presented here with explanations.</p>
                </div>
                <br/>
                <br/>
                <div className={style.introcontainer}>
                    <h4>2022 - 2023</h4>
                    <h5>Github</h5>
                    <p> During the last year, I self-studied the web programming</p>
                    <p>field starting with HTML, CSS, Javascript, different</p>
                    <p>frameworks like React and Next.Js from online trainings and</p>
                    <p>courses that helped me developed a better understanding</p>
                    <p> of the front-end development as well as back-end</p>
                    <p>development and had my first projects done. My personal</p>
                    <p>preference is Next.js as a framework.</p>
                </div>
                <br/>
                <br/>
                <div className={style.introcontainer}>
                    <h4>2013 - 2021</h4>
                    <h5>Maritime Engineer</h5>
                    <p> I came from a background of doing jobs in the maritime</p>
                    <p>industry. I was a seafarer: cadet and junior engineer, worked</p>
                    <p>on international shipping transport companies like CMA</p>
                    <p>CGM and also on cruise ships from Holland America Group.</p>
                    <p> I traveled the world a lot.</p>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <div className={style.breakline} />
            <br />
            <br />
            <br />
            <div className={style.headerprojects}>
                <div className={style.header3wrap}>
                    <h3 className={style.header3}>Testimonials</h3>
                </div>
            </div>
            <br />
            <br />

            <div className={style.introwrap}>
                <div className={style.introcontainer}>
                    <p> "I am pleased to write a letter of recommendation for</p>
                    <p>Adrian Paun. As his tutor, I have had an opportunity to </p>
                    <p>observe his participation and interaction in class and to</p>
                    <p>evaluate Adrian's knowledge of the subject matter. He is</p>
                    <p> an outstanding student in all respects Adrian Paun is</p>
                    <p>proven that through hard work, follow-through, and</p>
                    <p>teamwork; he can accomplish tasks in a courteous and</p>
                    <p>timely manner. Adrian is well equipped to grow from the</p>
                    <p>challenges that he has presented with his proactivity,</p>
                    <p>good staging, and fast learning skills prepare him</p>
                    <p>beautifully for his clients or your organization.I strongly</p>
                    <p>endorse making Adrian a member of your team."</p>
                </div>
                <br/>
                <div className={style.introcontainer}>
                    <div className={style.wrapicons}>
                        <div className={style.icon}>
                            <Image src={joseph}
                                alt="Joseph Icon"
                                width="64"
                                height="64"
                                className={style.icon2}
                            />
                        </div>
                    </div>
                    <p><b>Joseph Mhanna</b></p>
                    <p><i>PHD Candidate / Master in Cloud Computing</i></p>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <div className={style.breakline} />
            <br />
            <br />
            <br />
            <div className={style.headerprojects}>
                <div className={style.header3wrap}>
                    <h3 className={style.header4}>If you need work or do you want me to take part of your organization, feel free to contact me!</h3>
                </div>
                <div className={style.introbuttonwrap}>
                    <Link href="https://www.linkedin.com/in/adrian-paun-b9065025a/" target="_blank" rel="noopener noreferrer">
                        <button className={style.buttonintro}>My LinkedIn</button>
                    </Link>
                </div>
            </div>
            <br />
            <br />
        </div>
    );
}