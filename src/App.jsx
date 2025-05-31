// In this code below a general example how to write React components using JSX
import { useState } from 'react';
import { createElement } from 'react';
import './App.css'

// task2 example 'useState'
function NameForm() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>مرحباً، {name}</p>
    </div>
  );
}


function App() {
  return (
    <div>
      <Header />
      <Main />
      <NameForm />
      <UserCard name="أحمد" job="مبرمج" />
      <Button label="إلغاء" />
      <Button label="حفظ" />
      <UserCard name="سارة" job="مصممة" />
      <Button label="إلغاء" />
      <Button label="حفظ" />
      <Footer />
    </div>
  );
}

// Just a simple example how PROPS works
function UserCard(props) {
  return (
    <div className="card">
      <h3>الموظف</h3>
      <p>الأسم: {props.name}</p>
      <p>الوظيفة: {props.job}</p>
    </div>
  );
}

// Example of using Reusable Component
function Button(props) {
  return <button>{props.label}</button>;
}


// Example of using Functional Component
function Header() {
  return <div>
    <h1>Sol company</h1>
    <h4>For Software & Management</h4>
  </div>;
}

function Main() {
  return <p>هذا هو المحتوى الرئيسي الخاص بالموقع الرسمي للشركة.</p>;
}

function Footer() {
  return <footer>جميع الحقوق محفوظة لشركة Sol © 2025</footer>;
}

export default App
