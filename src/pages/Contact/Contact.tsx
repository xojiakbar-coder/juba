import Profiles from './components/Profiles/Profiles';

// hooks
import { useTranslation } from 'react-i18next';
import { useContact } from '@/modules/contact/hooks';
import { useContext } from '@/core/context/contentLanguage';

// styles
import styles from './Contact.module.scss';

const Contact = () => {
  const { lang } = useContext();
  const { data } = useContact();
  const { t } = useTranslation();

  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t('contacts')}</h2>

        <div className={styles.grid}>
          <div className={styles.mapWrapper}>
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8975010266386!2d${data[0]?.[lang]?.longitude}!3d${data[0]?.[lang]?.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bf39ed4a3ad%3A0xff77565dc9633cc4!2z!5e0!3m2!1sru!2s!4v1731738256655!5m2!1sru!2s`}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
              className={styles.map}
            ></iframe>
          </div>

          <Profiles
            land="contact"
            profilesDir="col"
            email={data[0]?.[lang]?.email}
            facebook_url={data[0]?.[lang]?.facebook}
            telegram_url={data[0]?.[lang]?.telegram}
            instagram_url={data[0]?.[lang]?.instagram}
            phone_number={data[0]?.[lang]?.phoneNumber}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
