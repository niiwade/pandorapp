
import Layout from '../../components/layout/Layout'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

// import NewMeetup from '../../components/meetups/NewMeetupForm'

function NewMeetupPage(){

  function addMeetupHandler(enteredMeetupData){
  
  }
 return <Layout>
   <NewMeetupForm onAddMeetup={addMeetupHandler} />
 </Layout>;

}

export default NewMeetupPage