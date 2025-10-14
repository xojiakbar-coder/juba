// hooks
import { useContext } from '@/core/context/servicesContext';
import { useServiceKeys, useServiceWorks, useServiceTypeBottom, useServicePricingById } from '@/modules/services/hooks';

// sections
import { Home } from '../sections/Home';
import { Case } from '../sections/Case';
import { About } from '../sections/About';
import { Bottom } from '../sections/Bottom';
import { Pricing } from '../sections/Pricing';
import { OurWorks } from '../sections/OurWorks';
import { SubDetail } from '../sections/SubDetail';

// global sections
import Send from '@/pages/Send/Send';
import Contact from '@/pages/Contact/Contact';

// styles
import styles from './View.module.scss';

const View = () => {
  const { service } = useContext();

  const { data: bottomData, isSuccess: bottomSuccess } = useServiceTypeBottom(service?.id ? +service?.id : 0);
  const { data: pricingData, isSuccess: pricingSuccess } = useServicePricingById(service?.id ? +service?.id : 0);
  const { data: caseData, isSuccess: caseSuccess } = useServiceKeys(service?.id ? +service?.id : 0);
  const { data: worksData, isSuccess: worksSuccess } = useServiceWorks(service?.id ? +service?.id : 0);

  return (
    <div className={styles.container}>
      <Home />
      <SubDetail />
      <About />

      {/* Bottom faqat data bo‘lsa chiqadi */}
      {bottomSuccess && bottomData?.length > 0 && <Bottom />}
      {/* Pricing faqat data bo‘lsa chiqadi */}
      {worksSuccess && worksData?.length > 0 && <OurWorks />}
      {/* OurWorks faqat data bo‘lsa chiqadi */}
      {pricingSuccess && pricingData?.length > 0 && <Pricing />}
      {/* Case faqat data bo‘lsa chiqadi */}
      {caseSuccess && caseData?.length > 0 && <Case />}

      <Contact />
      <Send />
    </div>
  );
};

export default View;
