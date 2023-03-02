import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

class FaqAccordionGeneral extends Component {
  render() {
    return (
      <>
        {/* <!-- Faq Section --> */}
        <section class='faq-section'>
          <div class='auto-container'>
            <div class='row'>
              <div class='col-lg-5'>
                <div class='content mb-5 mr-lg-5'>
                  <div class='sec-title'>
                    <div class='sub-title'>
                      FREQUENTLY ASKED QUESTION <small>(General)</small>
                    </div>
                    <h2>Got Any Questions?</h2>
                    <div class='text'>
                      Welcome to our FAQ page! We know that the process of
                      applying to and attending college can be overwhelming,
                      whether you're a local or international student. That's
                      why we've compiled a list of frequently asked questions to
                      help you navigate this exciting time in your academic
                      journey. We're here to provide you with the answers and
                      resources you need to make informed decisions about your
                      education. If you don't find the information you're
                      looking for here, please don't hesitate to contact us
                      directly.
                    </div>
                  </div>
                  <div class='link-btn'>
                    <Link to={'/#'} class='theme-btn btn-style-one'>
                      <span class='btn-title'>Get More Help</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div class='col-lg-7'>
                <Accordion preExpanded={[0]} allowZeroExpanded>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How do I apply for financial aid as a local student in
                        Alberta, Canada?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        To apply for financial aid as a local student in
                        Alberta, Canada, you can visit the Alberta Student Aid
                        website and create an account to access the online
                        application form. You will need to provide personal and
                        financial information, as well as information about your
                        educational program, to determine your eligibility for
                        grants, loans, and scholarships. It is important to
                        apply as early as possible to ensure you receive maximum
                        funding. You can also contact our team for assistance
                        with the application process.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can I maximize my financial aid?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Our financial aid counselors can help you understand
                        your financial aid options and guide you through the
                        process of maximizing your aid. This may include helping
                        you find additional scholarships or grants that you are
                        eligible for.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can I customize projects to add members?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Nostrud exercitation ullamco laboris nisi ut aliquip
                        aute irure dolor indy reprehenderit in voluptate velit
                        esse cillum dole Veniam quis nul pariatur excepteur sint
                        nulla ipsum occaecat.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Why you respond so much late?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Nostrud exercitation ullamco laboris nisi ut aliquip
                        aute irure dolor indy reprehenderit in voluptate velit
                        esse cillum dole Veniam quis nul pariatur excepteur sint
                        nulla ipsum occaecat.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How to analyze marketing strategies?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Nostrud exercitation ullamco laboris nisi ut aliquip
                        aute irure dolor indy reprehenderit in voluptate velit
                        esse cillum dole Veniam quis nul pariatur excepteur sint
                        nulla ipsum occaecat.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What are latest updates and how to get it?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Nostrud exercitation ullamco laboris nisi ut aliquip
                        aute irure dolor indy reprehenderit in voluptate velit
                        esse cillum dole Veniam quis nul pariatur excepteur sint
                        nulla ipsum occaecat.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can I customize projects to add members?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Nostrud exercitation ullamco laboris nisi ut aliquip
                        aute irure dolor indy reprehenderit in voluptate velit
                        esse cillum dole Veniam quis nul pariatur excepteur sint
                        nulla ipsum occaecat.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Why you respond so much late?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Nostrud exercitation ullamco laboris nisi ut aliquip
                        aute irure dolor indy reprehenderit in voluptate velit
                        esse cillum dole Veniam quis nul pariatur excepteur sint
                        nulla ipsum occaecat.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default FaqAccordionGeneral;
