import { useFacebook } from '../../../hooks/useFacebook';
import { SocialContainer, FacebookIframe } from '../styles';
import { Transition } from '../../../components/Transition';
import { Loader } from '../../../components/Loader';

export const Facebook = () => {
  const { facebookPage, isLoading } = useFacebook();

  let content;
  if (isLoading) content = <Loader />;
  else if (facebookPage)
    content = (
      <Transition key={facebookPage}>
        <SocialContainer>
          <FacebookIframe
            src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${facebookPage}&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId`}
          ></FacebookIframe>
        </SocialContainer>
      </Transition>
    );

  return <section>{content}</section>;
};
