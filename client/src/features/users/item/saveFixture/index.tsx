import { useAppSelector } from '../../../../app/hooks';
import {
  useSaveFavFixturesMutation,
  useDeleteFavFixturesMutation,
} from '../../api';
import { toast } from 'react-toastify';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Item } from '../../styles';
import { FavFixtures } from '../../types';

interface SaveFavFixtureProps {
  fixture: FavFixtures;
}

export const SaveFavFixture = ({ fixture }: SaveFavFixtureProps) => {
  const { user } = useAppSelector((state) => state.auth);
  const { favFixtures } = useAppSelector((state) => state.user);

  const checkDuplicate = favFixtures?.some((f) => f?.id === fixture?.id);

  console.log(user);

  const [saveFavFixtures, { isLoading }] = useSaveFavFixturesMutation();

  const [deleteFavFixtures, { isLoading: isDeleting }] =
    useDeleteFavFixturesMutation();

  const onClick = () => {
    if (!checkDuplicate) {
      saveFavFixtures({ fixture: fixture.id, id: user?._id as string });
      toast.success('Fixture is now saved to your favourites');
    } else {
      deleteFavFixtures({ fixture: fixture.id, id: user?._id as string });
      toast.error('Fixture is already saved to your favourites');
    }
  };

  let content;
  if (!checkDuplicate) {
    content = (
      <Item
        onClick={onClick}
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="save fixture"
      >
        <AiOutlineStar size={16} />
      </Item>
    );
  } else {
    content = (
      <Item
        onClick={onClick}
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="unsave fixture"
      >
        <AiFillStar size={16} />
      </Item>
    );
  }

  return <> {content} </>;
};
