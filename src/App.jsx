import React from 'react'
import Header from './components/Header'
import Note from './components/Note'
import Footer from './components/Footer'
import notes from './notes'

const App = () => {
  return (
    <div><Header />
    {notes.map((n) => <Note 
   key={n.id}
   title={n.title}
   content={n.content}
  />)}
    <Footer />
    </div>
  )
}

export default App