

import MeetupList from '../components/meetups/MeetupList'

import Layout from '../components/layout/Layout'
const DUMMY_DATA =[
  {
    id:'m1',
    title: 'A first meetup',
    image:'https://en.wikipedia.org/wiki/Accra#/media/File:A_drone_footage_of_Accra_central,_Ghana.jpg',
    address: 'Some place 122'
  }
]
 
function HomePage(props){


return (
  <Layout>
    <MeetupList meetups={props.meetups} />
  </Layout>
);
}

export async function getStaticProps(){
  return{
    props:{
      meetups: DUMMY_DATA
    }
  }
}

export default HomePage