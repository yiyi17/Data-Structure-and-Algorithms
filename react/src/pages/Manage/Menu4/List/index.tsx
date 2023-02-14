
import { PageContainer } from '@ant-design/pro-layout';
import React from 'react'


const Exam = (props) => <div style={{...props.style}}>这是{props.children}111</div>

function CloneDemo({dom=<div/>,...props}) {
  return React.cloneElement(dom, {...props})
}

const Menu4 = () => {
  return (
    <PageContainer>
     <div>
      menue4
     </div>
     <CloneDemo dom={<Exam style={{color: 'red'}}></Exam>}><h1>kkkkkk</h1></CloneDemo>
    </PageContainer>
  );
};

export default Menu4;
