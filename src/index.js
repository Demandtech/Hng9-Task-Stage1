import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import { buttons } from './buttons'
import Button from './Button'

const Container = ()=>{
  return (
      <section className='container'>
          <Info />
          <div className='btnsContainer'>
                {buttons.map(button=>{
                    return <Button key={button.index} button={button}/>
                })} 
          </div>
          <Icons />
          <Footer />
      </section>
  )
}

const Info = ()=>{
  return (
      <div className='header'>
          <img 
              className='nav-icon'
              src='https://s3-alpha-sig.figma.com/img/149d/aff2/ca1fd76b13d56e22de4d580a7a07f880?Expires=1667779200&Signature=RL-uBKSPfTng0dqiZ8eryUrucLz99Yh7Md-E0IECrSIeGPx6Y-9f2zXSKEMV6-1rfCrfSkkW1z48L2r4j4UXKQVVXdjalozH0~BPOePKfeGSAaDJhw8NgoSGjSHU6lkewCMhTV2Iq2CoHD1dX9U9xB3I1r~Ep0kA7OHFTgIERT9zb5~yfKuVrZemKWlaAzh82QpB27uzKaHtwApsLAwcQ6iWbqtexY8VYXBmfzayB9i61lpdemueo5XhS5SPSHSnk3txbtk3mVt4DM-M00aJwHX3TQ0ryEJB~JEImsKqzVzM5cFq9JwIRtjGNpoE4uSJ-~gaecC~JjsmVuileQ08hg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              alt='nav icon'
          />
          <img
              id='profile__img'
              src='https://pbs.twimg.com/profile_images/1537699315459694593/BV0yaXx5_400x400.jpg'
              alt='display'
          />
          <h1 className='name'>
              Adekunle Rasheed
          </h1>
          <p id='slack' className='hidden'>
              Demand
          </p>
      </div>
  )
}

const Icons = ()=> {
  return (
      <div className='icons-wrapper'>
          <img
              className='slack'
              src='https://s3-alpha-sig.figma.com/img/03d7/a544/d24fed9c3ea9dff93c76e5c8428b7661?Expires=1667779200&Signature=Becx6iNHoW0G9vjxVqSQaoWpJo0iNF9vRRVhyO64ccKrEbZ25Ho3WejZaWnFeh7Nga0BBUnwWHQEt3HU3vGg16Y~nf57SI1675bafaBSnVdvARqkZfyczW6BQHK6BlWs5LSh~NILK2UBN8wZjl6k5bSvWFf4WI7EM3wlozLVtmRzR-qWg1~5HzfpiZhvBO4MT3K8zgkKmMFs4eoWVtTI6RH3TUPLiJL2g~ROm4pgjlmaFSQF6UqFOD6rpva3Iwn4bX7C4NuMTiZHEIJaw5JsEahHhC5fIcSZjce2CzxRk1GdkCHmcSQPoi07fI4eaxi18eSMiLoVkn-EHFKgMUvkyg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              alt='slack logo'
          />
          <img
              className='github'
              src='https://s3-alpha-sig.figma.com/img/8998/0a2c/52eac4e987c99a8ebf4e54cea12cff9d?Expires=1667779200&Signature=DjfKl44f0KXasjMnk0eBNXliybThZvV1R2tvp~Y2QSwgfyCHC2w361-OzCcKKF6IGy1H4twKEOwTchPqOdY5fqLHdfFHuvSrh3Kmx-A5dkfxooBaMPxjybtrRJwKZnMqksPmRCpJTPcPUedSM1VtUtASWpM1SqsCLwjJKNb8ZcBr1-7Q-Dj9xzNX7S67LGY5eitRub5DLBys4IjnCX2jAI5OYuhrYNxyjxIxXF5rjJFMVypWZueEmK3nrkyGD~T6mfBFFEyRSmbtzT1YAHQ0VDXL66~Zogb3jS5ZTX~6wbiD4RGU54bisLQhomNLF4TUb7J~uthhKXkJmycdZRq5yQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              alt='github logo'
          />
      </div>
  )
}

const Footer = ()=>{
  return (
      <div className='footer-wrapper'>
          <img
              src='https://s3-alpha-sig.figma.com/img/b8f8/62a6/2e6f5e1a5acfed6a5b47dc432b3bf77a?Expires=1667779200&Signature=Oi9Y6hDw5zxo88oDu7pZYkyIG~QdJLDJJWoG05AO0Qta59OcyGlS34EYCSEXbzNh75RPkF9dg8Qncy8zsYOZX6JOUd75aS4O0u47V4gZaRrMCbN7VlJFIIF4Br~KGVszGKuFQKE83TCExxku9BTDhHbkSw1ZPQ9IlWGTCfaYvHZ64sKTncm4HZTG0SW4VI-Bdkn7tTmmrhb-jmXie7q02jy15~nswyxzcBUEFpIO9WWo7WkGkHj0QZuC14XxduWrKK-Lbh3oIF8zlg0~RkIG5~DgwqeHLfvOSN9YMcYKoh0NGbJJOJEIeV7xKw0TCNWW5oNudGvO1VnTbLeV85NUUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              alt='zuri-logo'
          />
           <p>HNG Intership 9 Frontend Task</p>
          <img
              src='https://s3-alpha-sig.figma.com/img/2c1b/54c8/81fb9cf09e10f1e8bb7ac85e615baa89?Expires=1667779200&Signature=e1t6YP61iEgnXhXSYT8Lsqt2wwzF2JYtBVvzoVd3RiMY0v-REguN7IN1nEW58bgFVWv23FZExX0w8NALMbGC2ArR3JRMvAt27F9SyxDqDhtzjTE4ilM8tQfML~OaPqj9jc2ye6j912c~bg57sjpK~9hQvm26yKXX7~BeapI69K6xGcuofHdxtbmng36BzYsYpATlWRSkH2Yyg4mxUUz-3aMB2ClRSVBnBjzIocM5atD4dzHT5IhKATyYJdt7eNq1EgSH~efTfOiBdfYtgno3iOVMfNlI-JCDlYJRWWEfWXoE5FEh49voUDFiDvJG-PlKei7cnix-IF~PEkRVYO2B5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              alt='ingressive logo'
          />
      </div>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Container />
    </React.StrictMode>
)
