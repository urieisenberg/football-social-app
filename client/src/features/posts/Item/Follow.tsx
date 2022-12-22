import { useState, useEffect } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from '../../users/api';
import { followUser, unfollowUser } from '../../users/userSlice';
import { toast } from 'react-toastify';
import { Post } from '../../../app/types';
import { Follow } from './styles';
import { BsPersonDash, BsPersonPlus } from 'react-icons/bs';

interface FollowProps {
  post: Post;
}

export const FollowUser = ({ post }: FollowProps) => {
  const user = useAppSelector((state) => state.auth.user);
  const following = useAppSelector((state) => state.user.following);
  const dispatch = useAppDispatch();
  const [follow, { data: followData, isSuccess: followSuccess }] =
    useFollowUserMutation();
  const [unfollow, { data: unfollowData, isSuccess: unfollowSuccess }] =
    useUnfollowUserMutation();

  // const localStorageUserData = JSON.parse(localStorage.getItem('user') || '{}');

  // const [isFollowing, setIsFollowing] = useState(
  //   localStorageUserData.following?.includes(post.user)
  // );

  // const [isFollowing, setIsFollowing] = useState(
  //   following?.some((user) => user._id === post.user)
  // );

  // const [isFollowing, setIsFollowing] = useState(
  //   user !== null && user.following?.includes(post.user)
  // );

  // const isFollowing = user !== null && user.following?.includes(post.user);

  const [isFollowing, setIsFollowing] = useState(
    user !== null && user.following?.includes(post.user)
  );

  useEffect(() => {
    setIsFollowing(user !== null && user.following?.includes(post.user));
    if (followSuccess) {
      toast.success(`You are now following ${post.username}`, {
        toastId: 'followSuccess',
      });
    }
    if (unfollowSuccess) {
      toast.success(`You are no longer following ${post.username}`, {
        toastId: 'unfollowSuccess',
      });
    }
  }, [followSuccess, unfollowSuccess, user, post.username, post.user]);

  const onFollow = async () => {
    await follow(post.user);
    // followSuccess &&
    //   toast.success(`You are now following ${post.username}`, {
    //     toastId: 'followSuccess',
    //   });
  };

  const onUnfollow = async () => {
    await unfollow(post.user);
    // unfollowSuccess &&
    //   toast.success(`You are no longer following ${post.username}`, {
    //     toastId: 'unfollowSuccess',
    //   });
  };

  return (
    <>
      {/* {localStorageUserData?._id !== post.user && ( */}
      {user?._id !== post.user && (
        <>
          {isFollowing ? (
            <Follow onClick={onUnfollow}>
              <BsPersonDash size={16} />
            </Follow>
          ) : (
            <Follow onClick={onFollow}>
              <BsPersonPlus size={16} />
            </Follow>
          )}
        </>
      )}
    </>
  );
};
