import React, {Component} from 'react'

class QuizEnd extends Component{
  render(){
    return(
      <div>
       <p>Thanks for playing!</p>
       <a href=''>Reset Quiz</a>
       <QuizEnd />
     </div>
    )
  }
}

export default QuizEnd
