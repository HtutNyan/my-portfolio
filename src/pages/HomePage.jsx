import React from 'react';
import Container1 from '../components/Container1';
import Container2 from '../components/Container2';
import Container3 from '../components/Container3';
import Container4 from '../components/Container4';
import Container5 from '../components/Container5';
import Container6 from '../components/Container6';

function HomePage() {
  return (
        <div>
            <div className="flex justify-center">
                <div className="container bg-transparent rounded p-4">
                <Container1 title="Container 1">
                    <p>This is the content of container 1.</p>
                </Container1>
                </div>
            </div>
            <div className="flex justify-center">
              <div className="container bg-transparent rounded p-4"> 
                <Container2 title="Container 2"> 
                  <p>This is the content of container 2.</p>
                </Container2>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="container bg-transparent rounded p-4"> 
                <Container3 title="Container 3"> 
                  <p>This is the content of container 3.</p>
                </Container3>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="container bg-transparent rounded p-4"> 
                <Container4 title="Container 4"> 
                  <p>This is the content of container 4.</p>
                </Container4>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="container bg-transparent rounded p-4">
                <Container5 title="Container 5"> 
                  <p>This is the content of container 5.</p>
                </Container5>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="container bg-transparent rounded p-4"> 
                <Container6 title="Container 6"> 
                  <p>This is the content of container 6.</p>
                </Container6>
              </div>
            </div>
        </div>
  );
}

export default HomePage;
