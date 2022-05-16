import React, {useState} from 'react'
import Sidebar from '../Sidebar/Sidebar';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import { Container, ButtonGroup, Button, Dropdown, Tooltip,OverlayTrigger, Form, Table, Modal, Row, Col,  Tab, Tabs} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import './JdMaster.css'
const JdMaster = () => {
    function refreshPage(){ 
        window.location.reload(); 
    }
   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);
    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);
   
  return (
    <div >
       <ToastContainer position={'top-center'}/>
    <Sidebar />
        <NavbarMenu />
        <Container className='jd-list'>
            <div className='d-flex text'>
            <p>No of jd (3)</p><span className='mx-3'>|</span>
            <p >No of contacts (23)</p>
            </div>
            <div className='mb-2'>
            <ButtonGroup className="btn btn-light">
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Save Jd</Tooltip>}>
            <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
            <i className="far fa-save"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>

  </Dropdown.Menu>
            </Dropdown>
            </OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Add List</Tooltip>}>
            <Dropdown className='mx-2'>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
            <i className="fas fa-plus"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <h5 className='mt-3 mb-3 text-center'>Add JDs List</h5>
    <Form>
      <Form.Group className='mb-3'>
        <Form.Control placeholder='Title'type='text' name="title"/>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control placeholder='Industry' type='text' name="industry"/>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control placeholder='Client Name' type='text' name="client"/>
      </Form.Group>
      <div className='d-flex justify-content-center'>
      <Button>Save</Button>
      </div>
    </Form>
  </Dropdown.Menu>
            </Dropdown>
            </OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Reload Page</Tooltip>}>
            <Button className="btn btn-light mx-2" onClick={refreshPage}><i className="fas fa-redo-alt"></i></Button>
            </OverlayTrigger>
          </ButtonGroup>
          <ButtonGroup>
         <Link to="/Filter2"><Button variant='danger' className='mx-3' ><i className="fas fa-search me-2"style={{color:'#fff'}} ></i>Search</Button></Link>
          </ButtonGroup>
          <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Add to Freeze List</Tooltip>}>
            <Button variant='success' className='mx-2' onClick={handleShow2}> Add to Freeze List</Button>
          </OverlayTrigger>
          <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">My Freeze List</Tooltip>}>
            <Button variant='primary' className='mx-2' onClick={handleShow3}> My Freeze</Button>
          </OverlayTrigger>
            </div>
            </Container>
            <div className='jd-wraper'>
            <Container  className='table-data' fluid>
                <Table responsive className='data-table'>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Force to use our database?- </th>
                            <th>Exclusivity</th>
                            <th>CVs quality check </th>
                            <th>priority tag (P)—</th>
                            <th>JD upload date-time </th>
                            <th>JD number </th>
                            <th>Number of vacancies</th>
                            <th> JD details</th>
                          
                            <th>Company </th>
                           
                            <th>Salary</th>
                            <th>Education</th>
                            <th>Experience</th>
                            <th>work location of JD </th>
                            <th>Rounds of interview </th>
                            <th>Notice period preference given by client </th>
                            <th>sign up rate with client </th>
                            <th>payment terms </th>
                            <th>Replacement period </th>
                            <th>number of submissions required </th>
                            <th>Your payout </th>
                            <th>Assured delivery required by client (TAT)</th>
                            <th>remarks/comments </th>
                            <th>Client coordination</th>
                            <th>admin spoc</th>
                            <th>JD status </th>
                            <th>Allow one candidate submission by user? </th>
                            <th>JD Acceptance </th>
                            <th>When submission happened?  </th>
                            <th>Feedback from client updated by user </th>
                            <th>Feedback from admin</th>
                            <th>Cvs quality approval</th>
                            <th>Status as per user </th>
                            <th>Offer</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td className='text-center'>yes</td>
                            <td>11/05/22</td>
                            <td className='position'>Title<br></br> <span > <i className="fas fa-building me-2"  onClick={handleShow}></i> | <i className="fas fa-user ms-2" onClick={handleShow}></i> </span></td>
                            <td className='deatail'>Jd Name <br></br><span><a href='https://talenttrackerhr.in/'><i className="fab fa-firefox me-2"></i></a> | <a href='https://www.linkedin.com/login'><i className="fab fa-linkedin ms-2 me-2"></i></a> | </span> <i className="fas fa-eye ms-2"  onClick={handleShow1}></i></td>
                            <td className='jd-terms'><br></br><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                            <td>jd details</td>
                            <td>N/A</td>
                            <td>N/A</td>
                          
                            <td > <td className='position'>Tittle<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">My Freeze List</Tooltip>}>
            
          <i className="fas fa-building me-2"  onClick={handleShow}></i></OverlayTrigger> | <i className="fas fa-user ms-2" onClick={handleShow}></i> </span></td></td>
                            <td className='jdlock'><i className="fas fa-lock" onClick={handleShow5}></i></td>
                        </tr>
                                               
                    </tbody>
                </Table>
            </Container>
            </div>
        <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-building me-3" ></i>Company Name / Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
            <h6 className='fw-bold mt-3 mb-3'> <i className="fas fa-user me-3"></i> Client Name: <span className='text-muted'>Client Name Here</span></h6>
            <h6 className='fw-bold mt-3 mb-3'> <i className="fas fa-suitcase me-3"></i> Job Details: <span className='text-muted'>Job details</span></h6>
            <h6 className='fw-bold mt-3 mb-3'> <i className="fas fa-building me-3"></i> Company Description: <span className='text-muted'>Description Here</span></h6>
            </Col>
            <Col xs={6}>
            <h6 className='fw-bold mt-3 '> <i className="fab fa-firefox me-2"></i> Website: </h6>
            <a href="https://example.com">https://example.com</a>
            <h6 className='fw-bold mt-3 mb-3'> Position Details : <span className='text-muted'>Position Details Here</span></h6>
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Second Modal for jd details */}
      <Modal show={show1} onHide={handleClose1} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-suitcase me-3" ></i>Jd's Name Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
                <h6 className='fw-bold mt-5 mx-3'> <i className="fab fa-firefox me-2"></i> Website: </h6>
            <a href="https://example.com" className='mx-3'>https://example.com</a>
            <h6 className='fw-bold mt-5 mx-3'> <i className="fab fa-linkedin me-2"></i> LinkedIn: </h6>
            <a href="https://linkedin.com" className='mx-3'>https://linkedin.com</a>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Number Of vacancies: <span className='text-muted'> 100</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Experience: <span className='text-muted'> 2 years</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> Salary: <span className='text-muted'> n/a</span></h6>
            </Col>
            <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-book me-2"></i> Education: <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-map-marked-alt"></i> Work Location: <span className='text-muted'> Patna, Bihar , India</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fab fa-intercom"></i> Rounds of an interview: <span className='text-muted'> 13</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-sticky-note"></i> Notice period preference given by the client: <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-user"></i> admin spoc)
: <span className='text-muted'> n/a</span></h6>
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Add To Freeze Modal Box */}
      <Modal show={show2} onHide={handleClose2} size='md'>
        <Modal.Header closeButton>
          <Modal.Title>Add To My Freeze List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5> No Records available.</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning'>Save Freeze</Button>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* My Freeze  List Modal */}
      <Modal show={show3} onHide={handleClose3} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>My Freeze List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Tabs defaultActiveKey="Freezes" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="Freezes" title="Freezes">
           <h5>No Data found !...</h5>
          </Tab>
          <Tab eventKey="Freeze History" title="Freeze History">
            <h5>No Data found !...</h5>
          </Tab>

        </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='success'>Freeze</Button>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Jd terms modal */}
      <Modal show={show4} onHide={handleClose4} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Terms Of JD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
          <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i>  Sign up rate with client: <span className='text-muted'> 0</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> payment terms: <span className='text-muted'> N/A</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Replacement period: <span className='text-muted'> n/a</span></h6>
          </Col>
          <Col xs={6}>
          <h6 className='fw-bold mt-5 mb-5 mx-3'>  Number of submissions required: <span className='text-muted'> N/A</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'>Your payout : <span className='text-muted'> n/a</span></h6> 
          </Col>
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Lock For me yes/no Modal  */}
      <Modal show={show5} onHide={handleClose5} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Lock For Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2 className='text-center'>Would you like to use “own portal” or “Our database”?</h2>
            <div className='d-flex justify-content-center mt-5 mb-5'>
              <Button variant='success' className='me-5' onClick={handleShow6}>Yes</Button>
            <Button variant="danger" onClick={handleClose5}>
            No
          </Button>
            </div>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
      {/* After Clicking Yes Lock For me yes open jd lock modal with check box */}
      <Modal show={show6} onHide={handleClose6} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Lock For Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mt-3 mb-3 mx-3'>
              <Form.Check type='checkbox' label="% Payout if use our candidate database." />
            </Form.Group>
            <Form.Group className='mb-3 mx-3'>
              <Form.Check type='checkbox' label="% Payout if use your own portal naukri/monster/times job etc." />
            </Form.Group>
            <Form.Group className='mb-3 mx-3'>
              <Form.Check type='checkbox' label="Absolute value payout if user uses own portal, " />
            </Form.Group>
            <Form.Group className='mb-3 mx-3'>
              <Form.Check type='checkbox' label="Absolute value payout---if use our database" />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Check type='checkbox' label="I accept the assured delivery date" />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Check type='checkbox' label=" I accept the terms of JD" />
            </Form.Group>
            <Button variant='success' ><i className='fas fa-lock me-2'></i>Lock</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose6}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default JdMaster