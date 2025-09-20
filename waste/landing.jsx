import React from 'react';
import GradientText from './GradientText';
import { useResponsive } from './useResponsive';

export default function TechnoSmartCampus() {
  const { isMobile, isSmallMobile } = useResponsive();

  return (
    <div style={{
      ...styles.baseContainer,
      ...(isMobile && {
        padding: '0',
        margin: '0',
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
      })
    }}>
      {/* Hero Section */}
      <section style={{
        ...styles.heroSection,
        ...(isMobile && {
          minHeight: 'auto',
          padding: 'clamp(60px, 8vw, 80px) clamp(16px, 4vw, 20px)',
          marginTop: 'clamp(70px, 10vw, 80px)',
        }),
        ...(isSmallMobile && {
          marginTop: 'clamp(60px, 8vw, 70px)',
          borderRadius: '12px',
          padding: 'clamp(40px, 8vw, 60px) clamp(12px, 3vw, 16px)',
        })
      }}>
        <div style={{
          ...styles.heroContent,
          ...(isMobile && {
            flexDirection: 'column',
            textAlign: 'center',
            gap: 'clamp(24px, 5vw, 32px)',
            padding: '0 clamp(16px, 4vw, 20px)',
            maxWidth: '100%',
            margin: '0 auto',
          })
        }}>
          <div style={{
            ...styles.heroLeft,
            ...(isMobile && {
              order: 2,
              width: '100%',
            })
          }}>
            <GradientText
              colors={["#84cc16", "#a8e600", "#84cc16", "#a8e600", "#84cc16"]}
              animationSpeed={10}
              showBorder={false}
              className="GradientText"
            >
              TECHNO SMART<br />
              CAMPUS CLUB
            </GradientText>
            <p style={styles.heroSubtitle}>Fostering Innovation and Skills Growth</p>
            <p style={styles.heroPresented}>Presented by</p>
            <p style={styles.heroUniversity}>MIT Art, Design & Technology University</p>
            <button style={styles.enterButton}>Enter</button>
          </div>
          <div style={{
            ...styles.heroRight,
            ...(isMobile && {
              order: 1,
              width: '100%',
            })
          }}>
            <img src="/Online tech talks-bro.png" alt="Hero Illustration" style={{
              ...styles.heroImage,
              ...(isMobile && {
                maxWidth: 'clamp(250px, 60vw, 320px)',
              }),
              ...(isSmallMobile && {
                maxWidth: 'clamp(220px, 70vw, 280px)',
              })
            }} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{
        ...styles.aboutSection,
        ...(isMobile && {
          padding: 'clamp(40px, 6vw, 60px) clamp(16px, 4vw, 20px)',
        })
      }}>
        <div style={{
          ...styles.container,
          ...(isMobile && {
            padding: '0 clamp(16px, 4vw, 20px)',
            maxWidth: '100%',
          })
        }}>
          <div style={{
            ...styles.aboutGrid,
            ...(isMobile && {
              gridTemplateColumns: '1fr',
              gap: 'clamp(24px, 5vw, 32px)',
            })
          }}>
            <div style={styles.aboutCard}>
              <div style={styles.aboutIcon}>📚</div>
              <h3 style={styles.aboutTitle}>About TSCC</h3>
              <p style={styles.aboutText}>
                The Techno Smart Campus Club is more than just a student organization - we're a movement
                of passionate innovators dedicated to creating an extraordinary future through technology.
              </p>
            </div>

            <div style={styles.aboutCard}>
              <div style={styles.aboutIcon}>🎯</div>
              <h3 style={styles.aboutTitle}>Our Mission</h3>
              <p style={styles.aboutText}>
                To foster a community of innovative thinkers who leverage cutting-edge technology to
                address environmental challenges and create sustainable solutions for a better world.
              </p>
            </div>

            <div style={styles.aboutCard}>
              <div style={styles.aboutIcon}>👁️</div>
              <h3 style={styles.aboutTitle}>Our Vision</h3>
              <p style={styles.aboutText}>
                To become the epicenter of Sustainable Technology Innovation at MIT ADT University and
                beyond. We envision a future where technology meets environmental progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Section */}
      <section style={{
        ...styles.transformSection,
        ...(isMobile && {
          padding: 'clamp(40px, 6vw, 60px) clamp(16px, 4vw, 20px)',
          borderRadius: '12px',
          margin: 'clamp(16px, 3vw, 20px) 0',
        })
      }}>
        <div style={{
          ...styles.container,
          ...(isMobile && {
            padding: '0 clamp(16px, 4vw, 20px)',
            maxWidth: '100%',
          })
        }}>
          <div style={{
            ...styles.transformGrid,
            ...(isMobile && {
              gridTemplateColumns: '1fr',
              gap: 'clamp(24px, 5vw, 32px)',
            })
          }}>
            <div style={{
              ...styles.transformLeft,
              ...(isMobile && {
                order: 2,
                textAlign: 'center',
                paddingRight: '0',
              })
            }}>
              <h2 style={{
                ...styles.transformTitle,
                ...(isMobile && {
                  fontSize: 'clamp(1.5rem, 5vw, 2rem)',
                  lineHeight: '1.3',
                  textAlign: 'center',
                })
              }}>
                Transform curiosity into action — join the
                Techno Smart Campus Club and unlock
                endless opportunities.
              </h2>
              <p style={styles.transformSubtext}>
                A student-driven community that designs, builds technology, build
                projects, and collaborate through workshops, events, and
                competitions.
              </p>
              <ul style={styles.featureList}>
                <li style={styles.featureItem}>
                  ✓ Participate in hands-on workshops and tech bootcamps
                </li>
                <li style={styles.featureItem}>
                  ✓ Build real-world projects with professional and international networks
                </li>
                <li style={styles.featureItem}>
                  ✓ Compete in hackathons and innovation challenges
                </li>
                <li style={styles.featureItem}>
                  ✓ Network with peers, mentors, and industry experts
                </li>
              </ul>
            </div>
            <div style={{
              ...styles.transformRight,
              ...(isMobile && {
                order: 1,
              })
            }}>
              <img src="/Digital transformation-cuate.png" alt="Transform Illustration" style={styles.transformImage} />
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section style={{
        ...styles.joinSection,
        ...(isMobile && {
          padding: 'clamp(40px, 6vw, 60px) clamp(16px, 4vw, 20px)',
        })
      }}>
        <div style={{
          ...styles.container,
          ...(isMobile && {
            padding: '0 clamp(16px, 4vw, 20px)',
            maxWidth: '100%',
          })
        }}>
          <div style={{
            ...styles.joinGrid,
            ...(isMobile && {
              gridTemplateColumns: '1fr',
              gap: 'clamp(24px, 5vw, 32px)',
            })
          }}>
            <div style={styles.joinLeft}>
              <img src="/Globalization-pana.png" alt="Team Collaboration" style={styles.joinImage} />
            </div>
            <div style={styles.joinRight}>
              <h2 style={styles.joinTitle}>
                Join the Techno Smart Campus Club —
                where learning, building, and innovation
                come alive.
              </h2>
              <p style={styles.joinSubtext}>
                A student-driven community that encourages you to explore
                technology, build impactful projects, and grow your skills
                through collaboration and innovation.
              </p>
              <div style={styles.joinFeatures}>
                <div style={styles.joinFeature}>
                  ✓ <strong>Hands-on Workshops</strong> — Gain practical skills in coding,
                  design, and new tech
                </div>
                <div style={styles.joinFeature}>
                  ✓ <strong>Hackathons & Events</strong> — Compete, collaborate, and
                  showcase your talent
                </div>
                <div style={styles.joinFeature}>
                  ✓ <strong>Networking & Mentorship</strong> — Connect with peers, mentors,
                  and industry experts
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{
        ...styles.testimonialsSection,
        ...(isMobile && {
          padding: 'clamp(40px, 6vw, 60px) clamp(16px, 4vw, 20px)',
          borderRadius: '12px',
          margin: 'clamp(16px, 3vw, 20px) 0',
        })
      }}>
        <div style={{
          ...styles.container,
          ...(isMobile && {
            padding: '0 clamp(16px, 4vw, 20px)',
            maxWidth: '100%',
          })
        }}>
          <div style={{
            ...styles.testimonialsGrid,
            ...(isMobile && {
              gridTemplateColumns: '1fr',
            })
          }}>
            <div style={styles.testimonialCard}>
              <p style={styles.testimonialText}>
                "Being part of the Techno Smart
                Campus Club gave me hands-on
                experience in collaborative
                problem-solving. The workshops
                and team projects helped me learn
                faster than classroom learning
                alone."
              </p>
              <div style={styles.testimonialAuthor}>
                <div style={styles.authorAvatar}>AS</div>
                <div>
                  <p style={styles.authorName}>— Aditi Sharma</p>
                  <p style={styles.authorTitle}>3rd Year Computer Science</p>
                </div>
              </div>
            </div>

            <div style={styles.testimonialCard}>
              <p style={styles.testimonialText}>
                "Hackathons and events organized
                by the club really boosted my
                confidence. I connected with
                amazing peers and even showcased
                my ideas to industry mentors."
              </p>
              <div style={styles.testimonialAuthor}>
                <div style={styles.authorAvatar}>RV</div>
                <div>
                  <p style={styles.authorName}>— Rohan Verma</p>
                  <p style={styles.authorTitle}>2nd Year Mechanical Engineering</p>
                </div>
              </div>
            </div>

            <div style={styles.testimonialCard}>
              <p style={styles.testimonialText}>
                "The club is more than just
                technology — it's about
                collaboration and innovation. It
                helped me turn my curiosity into
                real projects that made an impact."
              </p>
              <div style={styles.testimonialAuthor}>
                <div style={styles.authorAvatar}>NG</div>
                <div>
                  <p style={styles.authorName}>— Neha Gupta</p>
                  <p style={styles.authorTitle}>1st Year Information Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section style={{
        ...styles.ctaSection,
        ...(isMobile && {
          padding: 'clamp(32px, 6vw, 48px) clamp(16px, 4vw, 20px)',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
        })
      }}>
        <div style={{
          ...styles.container,
          ...(isMobile && {
            padding: '0 clamp(16px, 4vw, 20px)',
            maxWidth: '100%',
          })
        }}>
          <p style={styles.ctaSubtext}>Empowering Students Through Technology &</p>
          <p style={styles.ctaSubtext}>Innovation</p>
          <h2 style={{
            ...styles.ctaTitle,
            ...(isMobile && {
              fontSize: 'clamp(1.5rem, 5vw, 2rem)',
              lineHeight: '1.3',
            })
          }}>
            Join the Techno Smart<br />
            Campus Club and turn your<br />
            ideas into reality
          </h2>
          <button style={styles.ctaButton}>Enter</button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        ...styles.footer,
        ...(isMobile && {
          padding: 'clamp(32px, 6vw, 48px) clamp(16px, 4vw, 20px)',
        })
      }}>
        <div style={{
          ...styles.container,
          ...(isMobile && {
            padding: '0 clamp(16px, 4vw, 20px)',
            maxWidth: '100%',
          })
        }}>
          <div style={styles.footerGrid}>
            <div style={styles.footerColumn}>
              <h3 style={styles.footerTitle}>Techno</h3>
              <ul style={styles.footerList}>
                <li>First column</li>
                <li>Second</li>
                <li>Third</li>
              </ul>
            </div>

            <div style={styles.footerColumn}>
              <h3 style={styles.footerTitle}>First column</h3>
              <ul style={styles.footerList}>
                <li>First page</li>
                <li>Second page</li>
                <li>Third page</li>
                <li>Fourth</li>
              </ul>
            </div>

            <div style={styles.footerColumn}>
              <h3 style={styles.footerTitle}>Second</h3>
              <ul style={styles.footerList}>
                <li>Fifth page</li>
                <li>Sixth page</li>
                <li>Eighth</li>
              </ul>
            </div>

            <div style={styles.footerColumn}>
              <h3 style={styles.footerTitle}>Third</h3>
              <ul style={styles.footerList}>
                <li>Seventh</li>
                <li>Ninth page</li>
                <li>Tenth page</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  // Base container styles
  baseContainer: {
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontWeight: 700,
    letterSpacing: '0.5px',
    fontSize: 'inherit',
    width: '100%',
    minHeight: '100vh',
    boxSizing: 'border-box',
  },
  GradientText: {
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontWeight: 700,
    letterSpacing: '0.5px',
    fontSize: 'inherit',
    display: 'inline-block',
  },

  // Shared container
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 clamp(16px, 4vw, 32px)',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
  },
  // Hero Section
  heroSection: {
    background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
    padding: 'clamp(80px, 10vw, 120px) clamp(16px, 4vw, 20px)',
    minHeight: 'calc(100vh - 120px)',
    borderRadius: 'clamp(16px, 4vw, 32px)',
    display: 'flex',
    alignItems: 'center',
    marginTop: 'clamp(70px, 8vw, 90px)',
    boxSizing: 'border-box',
    width: '100%',
    margin: '0 auto',
  },
  heroContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 'clamp(20px, 5vw, 40px)',
    flexWrap: 'wrap',
    width: '100%',
    boxSizing: 'border-box',
  },
  heroLeft: {
    flex: '1 1 300px',
    maxWidth: '600px',
    minWidth: '280px',
    boxSizing: 'border-box',
  },
  heroTitle: {
    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
    fontWeight: 700,
    color: '#000000ff',
    marginBottom: '20px',
    lineHeight: '1.1',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    letterSpacing: '0.5px',
  },
  heroSubtitle: {
    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
    color: '#666',
    marginBottom: '8px',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontWeight: 700,
    letterSpacing: '0.5px',
  },
  heroPresented: {
    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
    color: '#888',
    marginBottom: '4px',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontWeight: 700,
    letterSpacing: '0.5px',
  },
  heroUniversity: {
    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
    color: '#888',
    marginBottom: '40px',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontWeight: 700,
    letterSpacing: '0.5px',
  },
  enterButton: {
    backgroundColor: '#a7e04e',
    color: 'white',
    border: 'none',
    padding: 'clamp(10px, 1.8vw, 15px) clamp(24px, 4vw, 40px)',
    fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
    fontWeight: 700,
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    letterSpacing: '0.5px',
  },
  heroRight: {
    flex: '1 1 300px',
    textAlign: 'center',
    minWidth: '280px',
    boxSizing: 'border-box',
  },
  heroImage: {
    width: '100%',
    maxWidth: 'clamp(280px, 35vw, 400px)',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  },

  // About Section
  aboutSection: {
    padding: 'clamp(56px, 8vw, 96px) clamp(16px, 4vw, 20px)',
    backgroundColor: '#fff',
  },
  aboutGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'clamp(30px, 5vw, 50px)',
  },
  aboutCard: {
    textAlign: 'center',
    padding: 'clamp(20px, 4vw, 30px)',
    borderRadius: '16px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  aboutIcon: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  aboutTitle: {
    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
    fontWeight: 700,
    color: '#333',
    marginBottom: 'clamp(16px, 3vw, 20px)',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    letterSpacing: '0.5px',
  },
  aboutText: {
    color: '#666',
    lineHeight: '1.6',
    fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontWeight: 500,
    letterSpacing: '0.3px',
  },

  // Transform Section
  transformSection: {
    padding: 'clamp(56px, 8vw, 96px) clamp(16px, 4vw, 20px)',
    background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
    borderRadius: 'clamp(16px, 4vw, 32px)',
    margin: 'clamp(20px, 4vw, 40px) 0',
  },
  transformGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 'clamp(40px, 6vw, 60px)',
    alignItems: 'center',
  },
  transformLeft: {
    paddingRight: 'clamp(0px, 2vw, 20px)',
  },
  transformTitle: {
    fontSize: 'clamp(1.75rem, 4.5vw, 2.5rem)',
    fontWeight: 700,
    color: '#16a34a',
    marginBottom: '30px',
    lineHeight: '1.2',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    letterSpacing: '0.5px',
  },
  transformSubtext: {
    color: '#666',
    fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
    marginBottom: '40px',
    lineHeight: '1.6',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontWeight: 700,
    letterSpacing: '0.5px',
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
  },
  featureItem: {
    color: '#666',
    marginBottom: '12px',
    fontSize: 'clamp(0.95rem, 2vw, 1rem)',
    lineHeight: '1.5',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontWeight: 700,
    letterSpacing: '0.5px',
  },
  transformRight: {
    textAlign: 'center',
    order: '-1',
  },
  transformImage: {
    width: '100%',
    maxWidth: 'clamp(280px, 35vw, 350px)',
    height: 'auto',
  },

  // Join Section
  joinSection: {
    padding: 'clamp(56px, 8vw, 96px) clamp(16px, 4vw, 20px)',
    backgroundColor: '#fff',
  },
  joinGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 'clamp(40px, 6vw, 60px)',
    alignItems: 'center',
  },
  joinLeft: {
    textAlign: 'center',
  },
  joinImage: {
    width: '100%',
    maxWidth: 'clamp(280px, 35vw, 350px)',
    height: 'auto',
  },
  joinRight: {
    paddingLeft: 'clamp(0px, 2vw, 20px)',
  },
  joinTitle: {
    fontSize: 'clamp(1.75rem, 4.5vw, 2.5rem)',
    fontWeight: 700,
    color: '#16a34a',
    marginBottom: '30px',
    lineHeight: '1.2',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    letterSpacing: '0.5px',
  },
  joinSubtext: {
    color: '#666',
    fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
    marginBottom: '40px',
    lineHeight: '1.6',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontWeight: 700,
    letterSpacing: '0.5px',
  },
  joinFeatures: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  joinFeature: {
    color: '#666',
    fontSize: 'clamp(0.95rem, 2vw, 1rem)',
    lineHeight: '1.5',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontWeight: 700,
    letterSpacing: '0.5px',
  },

  // Testimonials Section
  testimonialsSection: {
    padding: 'clamp(56px, 8vw, 96px) clamp(16px, 4vw, 20px)',
    background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
    borderRadius: 'clamp(16px, 4vw, 32px)',
    margin: 'clamp(20px, 4vw, 40px) 0',
  },
  testimonialsGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'clamp(20px, 4vw, 30px)',
  },
  testimonialCard: {
    backgroundColor: 'white',
    padding: 'clamp(24px, 5vw, 40px)',
    borderRadius: 'clamp(8px, 2vw, 12px)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  testimonialText: {
    color: '#666',
    fontSize: 'clamp(0.95rem, 2vw, 1rem)',
    lineHeight: '1.6',
    marginBottom: '30px',
    fontStyle: 'italic',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontWeight: 700,
    letterSpacing: '0.5px',
  },
  testimonialAuthor: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  authorAvatar: {
    width: '50px',
    height: '50px',
    backgroundColor: '#e0e7ff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    color: '#4f46e5',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    letterSpacing: '0.5px',
  },
  authorName: {
    fontWeight: 700,
    color: '#333',
    marginBottom: '4px',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    letterSpacing: '0.5px',
  },
  authorTitle: {
    color: '#888',
    fontSize: '0.9rem',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontWeight: 700,
    letterSpacing: '0.5px',
  },


  // CTA Section
  ctaSection: {
    padding: 'clamp(48px, 7vw, 80px) 20px',
    textAlign: 'center',
    backgroundColor: '#121212',
    color: 'white',
    borderTopLeftRadius: '24px',
    borderTopRightRadius: '24px',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
    marginBottom: 0,
  },
  ctaSubtext: {
    fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)',
    marginBottom: '10px',
    opacity: 0.9,
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontWeight: 700,
    letterSpacing: '0.5px',
    color: '#e5e7eb',
  },
  ctaTitle: {
    fontSize: 'clamp(1.75rem, 4vw, 3rem)',
    fontWeight: 700,
    marginBottom: '40px',
    lineHeight: '1.2',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    letterSpacing: '0.5px',
    color: '#ffffff',
  },
  ctaButton: {
    backgroundColor: '#a7e04e',
    color: '#111111',
    border: 'none',
    padding: 'clamp(12px, 1.8vw, 18px) clamp(28px, 4vw, 50px)',
    fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
    fontWeight: 700,
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    letterSpacing: '0.5px',
    boxShadow: '0 8px 24px rgba(167, 224, 78, 0.25)',
  },

  // Footer
  footer: {
    backgroundColor: '#121212',
    color: '#e5e7eb',
    padding: 'clamp(48px, 7vw, 80px) 20px',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    marginTop: 0,
  },
  footerGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '40px',
  },
  footerColumn: {},
  footerTitle: {
    color: '#ffffff',
    fontWeight: 700,
    marginBottom: '20px',
    fontSize: 'clamp(1rem, 1.8vw, 1.1rem)',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    letterSpacing: '0.5px',
  },
  footerList: {
    listStyle: 'none',
    padding: 0,
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontWeight: 700,
    letterSpacing: '0.5px',
  },
  footerLink: {
    color: '#cbd5e1',
    textDecoration: 'none',
    fontSize: 'clamp(0.9rem, 1.6vw, 1rem)'
  },

};