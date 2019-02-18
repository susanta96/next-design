import React from 'react'
import Head from '../components/head'
import Link from 'next/link'
import {Grid, withStyles, Card, CardContent, CardMedia} from '@material-ui/core'
import {ArrowForward} from '@material-ui/icons'
import Layout from '../components/_Layout/LayoutMain'
import Nav from '../components/nav'
import Footer from '../components/footer'
import indexStyles from '../static/Styles/indexStyle'



const Home = () => (
  <Layout>
    <Head title="Landing Page" />
    <Grid container spacing={8} style={indexStyles.header}>
      <Grid item xs={11} lg={11} style={indexStyles.container}>
          <div style={indexStyles.logo}><img src="../static/images/logo.png" alt="Logo" height="75px"/></div>
          <h2 style={indexStyles.logoText}>Visionary</h2>
          < Nav /> 

      </Grid>
    </Grid>

    <section style={indexStyles.getStarted}>
      <Grid container spacing={24}>
        <Grid item xs={2} md={4} lg={4} style={indexStyles.contentStarted}>
          <p style={indexStyles.heading}>Education.Truly Visionary</p>
          <p style={indexStyles.para}>Personalised learning. Deeper understanding and greater engagement amongest learners</p>
          <div style={indexStyles.knowMore}>
                <button style={indexStyles.btnStart}>Get Started</button>
          </div>
        </Grid>
        <Grid item xs={4} md={8} lg={8} style={indexStyles.imgStarted}>
          <img src={"./../static/images/1st.png"} alt="started"/>
        </Grid>
      </Grid>
    </section>

    <section style={indexStyles.materialSection}>
      <p style={indexStyles.Primaryheading}>Engaging Material</p>
      <p style={indexStyles.Secondaryheading}>VisionarySchoolmen's machine learning models will evaluate your educational materials</p>
      <Grid container spacing={0}>
        <Grid item xs={4} md={7} lg={7} style={indexStyles.imageWrap}>
            <img src={"./../static/images/2nd.png"} alt="Material" />
        </Grid>
        <Grid item xs={2} md={5} lg={5} style={indexStyles.contentMaterial}>
            <div style={indexStyles.firstMaterialBox}>
              <p style={indexStyles.materialHeading}>Concepts</p>
              <p style={indexStyles.para}>Morbi ieo risus, porta ac consectetur ac. vestibulum eros. Sed posuere consect.</p>
            </div>
            <div style={indexStyles.materialBox}>
              <p style={indexStyles.materialHeading}>Definitions</p>
              <p style={indexStyles.para}>Morbi ieo risus, porta ac consectetur ac. vestibulum eros. Sed posuere consect.</p>
            </div>
            <div style={indexStyles.materialBox}>
              <p style={indexStyles.materialHeading}>Notes</p>
              <p style={indexStyles.para}>Morbi ieo risus, porta ac consectetur ac. vestibulum eros. Sed posuere consect.</p>
            </div>
            <div style={indexStyles.materialBox}>
              <p style={indexStyles.materialHeading}>Tailor-Made Videos</p>
              <p style={indexStyles.para}>Morbi ieo risus, porta ac consectetur ac. vestibulum eros. Sed posuere consect.</p>
            </div>
        </Grid>
      </Grid>
    </section>

    <section style={indexStyles.personalisedSection}>
      <Grid container spacing={8}>
        <Grid item xs={3} md={6} lg={6} style={indexStyles.imageWrap}>
            <img src={"./../static/images/3rd.png"} alt="Personalised"/>
        </Grid>
        <Grid item xs={3} md={6} lg={6} style={indexStyles.contentPersonalise} >
            <p style={indexStyles.heading}>Personalised Learning</p>
            <p style={indexStyles.para}>Additional learning content can be recommended to you in the form of Pins when you upload any learning content into VisionarySchoolmen. VisionarySchoolmen's machine learning models will evaluate your educational materials and make recommendations of relevent educational materials as Pins that you may attach to your content. This makes adding additional learning content available for students easy. </p>
            <div style={indexStyles.knowMore}>
                <div style={indexStyles.btnMore}><ArrowForward /></div>
                <h3 style={indexStyles.textStyle}> Know More</h3>
            </div>
        </Grid>

      </Grid>
    </section>

    <section style={indexStyles.engageSection}>
      <Grid container spacing={8}>
        <Grid item xs={3} md={6} lg={6} style={indexStyles.imageWrap}>
            <img src={"./../static/images/4th.png"} alt="engageSection"/>
        </Grid>
        <Grid item xs={3} md={6} lg={6} style={indexStyles.contentEngage} >
            <p style={indexStyles.heading}>Student Engagement</p>
            <p style={indexStyles.para}> Learning on VSM is fun  and engaging. Discuss with your peers and share eductional materials with them through VSM's annotations and comments features. </p>
            <div style={indexStyles.knowMore}>
                <div style={indexStyles.btnMore}><ArrowForward /></div>
                <h3 style={indexStyles.textStyle}> Know More</h3>
            </div>
        </Grid>

      </Grid>
    </section>


    <section style={indexStyles.publicationSection}>
      <Grid container spacing={24}>
        <Grid item md={3} lg={3} style={indexStyles.contentPub} >
          <p style={indexStyles.heading}>Trusted Publications</p>
          <p style={indexStyles.para}>Etiam porta sem malesuada magna mollis euismod.Interger posuere erat a ante venenatis dapibus posuere</p>
        </Grid>
      </Grid>
    </section>

    <section style={indexStyles.educatorSection}>
      <Grid container spacing={16} >
        <Grid item xs={3} md={6} lg={6} style={indexStyles.imageWrap}>
            <img src={"./../static/images/5th.png"} alt="artificial"/>
        </Grid>
        <Grid item xs={3} md={6} lg={6} style={indexStyles.contentEdu} >
            <p style={indexStyles.headingEdu}>Advanced Educators Learning Systems</p>
            <p style={indexStyles.para}> Cutting edge technologies built into VSM's suite of educational applications allows  educators to leverage  on the latest technologies to meet the teaching and learning needs of today. </p>
            <div style={indexStyles.knowMore}>
                <div style={indexStyles.btnMore}><ArrowForward /></div>
                <h3 style={indexStyles.textStyle}> Know More</h3>
            </div>
        </Grid>

      </Grid>
    </section>

    <section style={indexStyles.artificialSection}>
      <Grid container spacing={8} alignContent="center" alignItems="center" >
        <Grid item xs={3} md={6} lg={6} style={indexStyles.content} >
            <p style={indexStyles.heading}>Artificial intelligence</p>
            <p style={indexStyles.para}> VisionarySchoolmen's suite of artificial intelligence application allows for the transcription of audio ad video files dynamically. perform tone analysis on a speaker's dialogue and evaluate in video facial emotion analysis.</p>
            <div style={indexStyles.knowMore}>
                <h3 style={indexStyles.textStyle}> Know More</h3>
                <div style={indexStyles.btnMore}><ArrowForward /></div>
            </div>
        </Grid>

        <Grid item xs={3} md={6} lg={6} style={indexStyles.imageWrap} >
            <img src={"./../static/images/6th.png"} alt="artificial"/>
        </Grid>
      </Grid>
    </section>


    <section style={indexStyles.trialPromo}>
      <Grid container spacing={16}>
        <Grid item xs></Grid>
        <Grid item xs={6} lg={6}>
        <div style={indexStyles.promoBox}>
          <h1 style={indexStyles.promoText}>Take a free trial and see it for yourself</h1>
          <button style={indexStyles.btnWhite}>get started</button>
        </div>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </section>
    <Footer />
  </Layout>
    
)

export default Home;
 