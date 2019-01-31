import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import FormInputs from 'components/FormInputs/FormInputs.jsx';
import { Radio } from 'components';
import { Checkbox } from 'components';

import { PanelHeader } from "components";

class About extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={12}>
              <Card>

                <CardBody>
                  <div>
                    <h2>
                      About Us{" "}
                    </h2>

                  </div>



                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default About;
