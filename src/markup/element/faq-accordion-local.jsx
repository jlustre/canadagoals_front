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

class FaqAccordionLocal extends Component {
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
                      FREQUENTLY ASKED QUESTION <small>(Local)</small>
                    </div>
                    <h2>Got Any Questions?</h2>
                    <div class='text'>
                      Welcome to our FAQ page, designed specifically for local
                      students. Here, we've compiled a list of commonly asked
                      questions to help you navigate through the admission
                      process, financial aid, course selection, and more. We
                      understand that applying for college or university can be
                      overwhelming, and our goal is to provide you with the
                      information you need to make informed decisions about your
                      education. If you have any additional questions or
                      concerns, please don't hesitate to contact us.
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
                        What programs or courses are available for local
                        students?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        We offer a wide range of programs and courses for local
                        students, including certificate programs, diploma
                        programs in various fields of study.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is the eligibility criteria for applying for
                        financial aid in Canada?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        To be eligible for financial aid in Canada, you must be
                        a Canadian citizen or permanent resident, and you must
                        be enrolled in a designated educational institution in
                        Canada.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What are the types of financial aid available to local
                        students in Canada?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Local students in Canada can apply for various types of
                        financial aid, such as grants, loans, scholarships,
                        bursaries, and awards. The availability of financial aid
                        programs varies by province and territory.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can I apply for financial aid if I am part-time student?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, you can still apply for financial aid as a
                        part-time student. However, the amount of financial aid
                        you are eligible for may be reduced compared to a
                        full-time student.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can I apply for student loans as a local student in
                        Alberta, Canada?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, local students in Alberta, Canada are eligible to
                        apply for student loans through the Alberta Student Aid
                        website.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How do I repay my student loans?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You can start repaying your student loans after you have
                        graduated, or after you have stopped attending school.
                        You can make payments online, by phone, by mail, or
                        through automatic withdrawals from your bank account.
                        The repayment period varies depending on the type of
                        loan you have and your lender.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can I apply for financial aid if I have bad credit?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, you can still apply for financial aid if you have
                        bad credit. Some financial aid programs do not take
                        credit into account when determining eligibility, while
                        others may require a co-signer or collateral. It is
                        important to research your options and speak to a
                        financial aid advisor to determine your best course of
                        action.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can I make sure I am taking the right courses to
                        meet my educational goals as a local student in Alberta,
                        Canada?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You can speak with an academic advisor at your
                        educational institution to help you select courses that
                        align with your academic and career goals. It is also
                        important to regularly review your progress towards your
                        goals and adjust your course selection if necessary.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What resources are available to help me find part-time
                        work as a local student in Alberta, Canada?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Your educational institution may have a career centre
                        that can help you with job searching and resume
                        building. You can also search for job postings online
                        through job search websites or visit local businesses to
                        inquire about job openings.
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
export default FaqAccordionLocal;
