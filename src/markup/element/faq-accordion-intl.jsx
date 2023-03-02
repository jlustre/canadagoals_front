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

class FaqAccordionIntl extends Component {
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
                      FREQUENTLY ASKED QUESTION <small>(International)</small>
                    </div>
                    <h2>Got Any Questions?</h2>
                    <div class='text'>
                      Welcome to our FAQ page for international students! We
                      understand that navigating the higher education system in
                      a foreign country can be daunting, and we're here to help.
                      We've compiled a list of frequently asked questions that
                      international students like you may have, along with their
                      corresponding answers. Whether you're still considering
                      studying abroad or have already begun your academic
                      journey, we hope that this page will provide you with the
                      information you need to make the most out of your
                      experience.
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
                        Do I need a student visa to study in Canada as an
                        international student?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, as an international student, you will need a valid
                        study permit to study in Canada. In addition, you may
                        also need to apply for a temporary resident visa (TRV)
                        or an electronic travel authorization (eTA) depending on
                        your country of origin. It's important to research and
                        understand the specific visa requirements for your
                        situation and to apply well in advance of your planned
                        start date. Our team can provide guidance and resources
                        to help you through the visa application process.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What English language proficiency tests are accepted by
                        Canadian universities?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Canadian universities typically accept either the TOEFL
                        or IELTS tests as proof of English proficiency.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is a study permit and do I need one to study in
                        Canada?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        A study permit is an official document issued by the
                        Canadian government that allows foreign students to
                        study in Canada. Most international students will need a
                        study permit to study in Canada.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How do I apply for a study permit?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You can apply for a study permit online or through a
                        Canadian embassy or consulate in your home country. You
                        will need to provide various documents, including proof
                        of acceptance to a Canadian institution, proof of
                        financial support, and a valid passport.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What documents do I need to apply for a study permit?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        The specific documents required may vary depending on
                        your country of origin and the Canadian institution you
                        plan to attend, but generally you will need to provide
                        proof of acceptance to a Canadian institution, proof of
                        financial support, and a valid passport.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How much does it cost to apply for a study permit?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>The application fee for a study permit is CAD $150.</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can I work while studying in Canada as an international
                        student?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, international students are allowed to work
                        part-time while studying in Canada, typically up to 20
                        hours per week.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What are the requirements for international students to
                        apply for a work permit in Canada after graduation?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        To apply for a work permit in Canada after graduation,
                        international students must have completed a program of
                        study at a designated learning institution in Canada and
                        have a valid study permit at the time of application.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is a Co-op program and how does it work for
                        international students in Canada?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        A Co-op program is a work-integrated learning program
                        that allows students to gain practical work experience
                        related to their field of study while still in school.
                        International students with a valid study permit are
                        typically eligible to participate in Co-op programs in
                        Canada.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can international students apply for scholarships to
                        study in Canada?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, international students can apply for scholarships
                        to study in Canada. Many Canadian institutions offer
                        scholarships specifically for international students,
                        and there are also government-funded scholarship
                        programs available.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can I get health insurance as an international
                        student in Canada?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Most Canadian provinces require international students
                        to have health insurance. You may be able to purchase
                        health insurance through your Canadian institution or
                        through a private insurance provider.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do international students have to pay taxes in Canada?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, international students are required to pay taxes on
                        any income earned in Canada.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What resources are available to help international
                        students adjust to life in Canada?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Many Canadian institutions have dedicated international
                        student services offices that provide a range of
                        resources and support services to help international
                        students adjust to life in Canada. These may include
                        orientation programs, language classes, cultural events,
                        and more.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can I apply for a study permit as an international
                        student?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        To apply for a study permit, you will need to provide
                        several documents, including a letter of acceptance from
                        a Canadian educational institution, proof of financial
                        support, and a valid passport. You can apply online or
                        through a visa application center in your home country.
                        You will need to apply for a study permit through
                        Immigration, Refugees and Citizenship Canada (IRCC). You
                        can apply online or by paper. It is important to note
                        that you will need a letter of acceptance from a
                        Canadian educational institution before you can apply
                        for a study permit.
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
export default FaqAccordionIntl;
