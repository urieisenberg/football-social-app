import { useParams } from 'react-router-dom';
import { useGetHeadToHeadQuery } from '../../api';
import { Loader } from '../../../../components/Loader';
import { FixturesList } from '..';

export const HeadToHeadFixturesList = () => {
    const { teamids } = useParams();

    const { data, error, isLoading, isSuccess } = useGetHeadToHeadQuery(teamids as string);

    let content;
    if (isLoading) content = <Loader />;
    else if (error || !data) content = <>No fixtures found</>;
    else if (isSuccess && data) content = <FixturesList fixtures={data} />;

    return <>{content}</>;
};

