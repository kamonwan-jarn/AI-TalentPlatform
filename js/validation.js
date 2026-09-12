/**
 * AI Future Talent Acquisition & Skills Development Platform
 * Unified Client-side Form Validation and Interactivity (js/validation.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. Auto-select Job Position from URL parameter on Index/Registration page
  // ------------------------------------------------------------------------
  const urlParams = new URLSearchParams(window.location.search);
  const jobParam = urlParams.get('job');
  const jobSelect = document.getElementById('jobPosition');

  if (jobParam && jobSelect) {
    const matchingOption = Array.from(jobSelect.options).find(opt => opt.value === jobParam);
    if (matchingOption) {
      jobSelect.value = jobParam;
      const formSection = document.getElementById('registration-section') || document.getElementById('registrationForm');
      if (formSection) {
        setTimeout(() => {
          formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          jobSelect.focus();
        }, 200);
      }
    }
  }

  // ------------------------------------------------------------------------
  // 2. Talent Registration Form Validation (index.html)
  // ------------------------------------------------------------------------
  const registrationForm = document.getElementById('registrationForm');

  if (registrationForm) {
    registrationForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const prefix = document.getElementById('prefix');
      const name = document.getElementById('name');
      const phone = document.getElementById('phone');
      const email = document.getElementById('email');
      const address = document.getElementById('address');
      const education = document.getElementById('education');
      const aiSkillTier = document.getElementById('aiSkillTier');
      const jobPosition = document.getElementById('jobPosition');
      const pdpaConsent = document.getElementById('pdpaConsent');

      const markError = (element, isInvalid) => {
        if (!element) return;
        if (isInvalid) {
          element.classList.add('input-error');
        } else {
          element.classList.remove('input-error');
        }
      };

      [prefix, name, phone, email, address, education, aiSkillTier, jobPosition].forEach(el => markError(el, false));

      let hasError = false;
      let errorMsg = '';

      if (!prefix.value || !name.value.trim() || !phone.value.trim() || !email.value.trim() || 
          !address.value.trim() || !education.value || !aiSkillTier.value || !jobPosition.value) {
        hasError = true;
        errorMsg = 'กรุณากรอกข้อมูลและเลือกตัวเลือกให้ครบทุกช่องที่มีเครื่องหมาย *';
        [prefix, name, phone, email, address, education, aiSkillTier, jobPosition].forEach(el => {
          if (!el.value || !el.value.trim()) markError(el, true);
        });
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        hasError = true;
        errorMsg = 'รูปแบบอีเมลไม่ถูกต้อง (ตัวอย่าง: yourname@example.com)';
        markError(email, true);
        email.focus();
      } else if (!/^\d{10}$/.test(phone.value.replace(/[-\s]/g, ''))) {
        hasError = true;
        errorMsg = 'เบอร์โทรศัพท์ต้องเป็นตัวเลข 10 หลัก (ตัวอย่าง: 0812345678)';
        markError(phone, true);
        phone.focus();
      } else if (!pdpaConsent.checked) {
        hasError = true;
        errorMsg = 'กรุณากดยินยอมการประมวลผลข้อมูลส่วนบุคคล (PDPA Consent)';
        pdpaConsent.focus();
      }

      if (hasError) {
        showModalAlert('แจ้งเตือนการกรอกข้อมูล', errorMsg, 'error');
        return;
      }

      const positionText = jobPosition.options[jobPosition.selectedIndex].text;
      const tierText = aiSkillTier.options[aiSkillTier.selectedIndex].text;
      
      const successMessage = `
        <p><strong>ชื่อ-นามสกุล:</strong> ${prefix.options[prefix.selectedIndex].text} ${name.value.trim()}</p>
        <p><strong>ตำแหน่งที่สมัคร:</strong> ${positionText}</p>
        <p><strong>ระดับ AI Skill:</strong> ${tierText}</p>
        <p><strong>อีเมล:</strong> ${email.value.trim()}</p>
        <p><strong>เบอร์โทร:</strong> ${phone.value.trim()}</p>
        <p style="margin-top: 10px; color: #10b981; font-weight: 600;">✓ ทางเราได้รับข้อมูลการสมัครของคุณเรียบร้อยแล้ว ทีมงานจะติดต่อกลับโดยเร็วที่สุด</p>
      `;

      showModalAlert('สมัครงานสำเร็จ! (Registration Completed)', successMessage, 'success');
      registrationForm.reset();
    });

    registrationForm.querySelectorAll('input, select, textarea').forEach(input => {
      input.addEventListener('input', () => input.classList.remove('input-error'));
      input.addEventListener('change', () => input.classList.remove('input-error'));
    });
  }

  // ------------------------------------------------------------------------
  // 3. Contact Form Validation (about.html)
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('name');
      const studentId = document.getElementById('studentId');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const message = document.getElementById('message');

      const markError = (element, isInvalid) => {
        if (!element) return;
        if (isInvalid) {
          element.classList.add('input-error');
        } else {
          element.classList.remove('input-error');
        }
      };

      [name, studentId, email, phone, message].forEach(el => markError(el, false));

      let hasError = false;
      let errorMsg = '';

      if (!name.value.trim() || !studentId.value.trim() || !email.value.trim() || 
          !phone.value.trim() || !message.value.trim()) {
        hasError = true;
        errorMsg = 'กรุณากรอกข้อมูลให้ครบทุกช่อง';
        [name, studentId, email, phone, message].forEach(el => {
          if (!el.value || !el.value.trim()) markError(el, true);
        });
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        hasError = true;
        errorMsg = 'รูปแบบอีเมลไม่ถูกต้อง';
        markError(email, true);
        email.focus();
      } else if (!/^\d{10}$/.test(phone.value.replace(/[-\s]/g, ''))) {
        hasError = true;
        errorMsg = 'เบอร์โทรศัพท์ต้องเป็นตัวเลข 10 หลัก';
        markError(phone, true);
        phone.focus();
      }

      if (hasError) {
        showModalAlert('แจ้งเตือนการส่งข้อความ', errorMsg, 'error');
        return;
      }

      const successMessage = `
        <p><strong>ชื่อผู้ติดต่อ:</strong> ${name.value.trim()} (${studentId.value.trim()})</p>
        <p><strong>อีเมล:</strong> ${email.value.trim()}</p>
        <p><strong>ข้อความ:</strong> ${message.value.trim()}</p>
        <p style="margin-top: 10px; color: #10b981; font-weight: 600;">✓ ข้อความของคุณถูกส่งเรียบร้อยแล้ว ขอบคุณสำหรับการติดต่อ</p>
      `;

      showModalAlert('ส่งข้อความสำเร็จ (Message Sent)', successMessage, 'success');
      contactForm.reset();
    });

    contactForm.querySelectorAll('input, select, textarea').forEach(input => {
      input.addEventListener('input', () => input.classList.remove('input-error'));
    });
  }

  // ------------------------------------------------------------------------
  // 4. Course Details Modal (courses.html)
  // ------------------------------------------------------------------------
  const courseDetailButtons = document.querySelectorAll('.course-detail-btn');
  courseDetailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const courseCard = btn.closest('.course-card');
      const title = courseCard ? courseCard.querySelector('.course-title').innerText : 'รายละเอียดหลักสูตร';
      const badge = courseCard ? courseCard.querySelector('.course-badge').innerText : '';
      const price = courseCard ? courseCard.querySelector('.course-price').innerText : '';
      const desc = courseCard ? courseCard.querySelector('.course-desc').innerText : '';
      
      const content = `
        <div style="margin-bottom: 12px;">
          <span style="display: inline-block; background: #eff6ff; color: #1e40af; font-size: 0.8rem; font-weight: 600; padding: 3px 8px; border-radius: 4px;">${badge}</span>
        </div>
        <p style="font-size: 1.1rem; font-weight: 700; color: #0d9488; margin-bottom: 10px;">ราคา: ${price}</p>
        <p style="color: #475569; line-height: 1.6; margin-bottom: 15px;">${desc}</p>
        <div style="background: #f8fafc; border-left: 3px solid #2563eb; padding: 10px 14px; border-radius: 4px; font-size: 0.9rem;">
          <strong>สิ่งที่จะได้รับ:</strong> ใบประกาศนียบัตรรับรองทักษะ AI (AI Skill Certificate), สิทธิ์เข้าถึง Workspace เครื่องมือ AI ฟรีตลอดคอร์ส และคำปรึกษาเตรียมพร้อมสัมภาษณ์งาน
        </div>
      `;

      showModalAlert(title, content, 'info');
    });
  });

  // ------------------------------------------------------------------------
  // 5. Global Modal / Popup Helper
  // ------------------------------------------------------------------------
  function showModalAlert(title, messageHtml, type = 'info') {
    let modal = document.getElementById('global-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'global-modal';
      modal.className = 'modal-backdrop';
      modal.innerHTML = `
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="modal-title-text"></h3>
            <button type="button" class="modal-close" id="modal-close-btn">&times;</button>
          </div>
          <div class="modal-body" id="modal-body-content"></div>
          <div class="modal-footer">
            <button type="button" class="cta-button" id="modal-ok-btn" style="padding: 0.5rem 1.5rem; font-size: 0.9rem;">ตกลง</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      const closeAction = () => modal.classList.remove('show');
      modal.querySelector('#modal-close-btn').addEventListener('click', closeAction);
      modal.querySelector('#modal-ok-btn').addEventListener('click', closeAction);
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeAction();
      });
    }

    const titleEl = modal.querySelector('#modal-title-text');
    const bodyEl = modal.querySelector('#modal-body-content');

    titleEl.textContent = title;
    bodyEl.innerHTML = messageHtml;

    modal.classList.add('show');
  }
});
