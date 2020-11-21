import React, { useState, useCallback } from 'react';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { CardWrapper } from './style';
import moment from 'moment';
import Link from 'next/link';
import {
    RetweetOutlined,
    HeartTwoTone,
    HeartOutlined,
    MessageOutlined,
    EllipsisOutlined
} from '@ant-design/icons';

import CommentForm from './CommentForm';
import PostImages from './PostImages';
import FollowButton from './FollowButton';
import PostCardContent from '../components/PostCardContent';

moment.locale('ko');
const PostCard = ({ post }) => {
    const id = useSelector((state) => state.user.me?.id);
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [editMode, setEditMode] = useState(false);
    // const { removePostLoading, updatePostLoading } = useSelector(state => state.post);
    // const liked = post.Likers.find((v) => v.id === id);

    const onLike = useCallback(() => {
        if (!id) alert('로그인이 필요합니다');
    }, [id]);
    const onUnlike = useCallback(() => {
        if (!id) alert('로그인이 필요합니다');
    }, [id]);
    const onRemovePost = useCallback(() => {
        if (!id) alert('로그인이 필요합니다');
    }, [id]);
    const onRetweet = useCallback(() => {
        if (!id) alert('로그인이 필요합니다');
    }, [id]);
    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);
    }, [id]);
    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    }, [id]);
    const onClickUpdate = useCallback(() => {
        setEditMode(true);
    }, []);
    const onCancelUpdate = useCallback(() => {
        setEditMode(false);;
    }, []);
    const onChangePost = useCallback((editText) => {
        setCommentFormOpened((prev) => !prev);
    }, [post]);

    return (
        <CardWrapper key={post.id}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked ?
                        <HeartTwoTone
                            key="heart"
                            twoToneColor="#eb2f96"
                            onClick={onToggleLike} /> :
                        <HeartOutlined
                            key="heart"
                            onClick={onToggleLike} />,
                    <MessageOutlined
                        key="message"
                        onClick={onToggleComment} />,
                    <Popover
                        key="ellipsis"
                        content={(
                            <Button.Group>
                                {id && post.User.id === id ?
                                    (
                                        <>
                                            {<Button
                                                onClick={onClickUpdate}>수정</Button>}
                                            <Button
                                                type="danger"
                                                onClick={onRemovePost}>삭제</Button>
                                        </>
                                    ) :
                                    <Button>신고하기</Button>}
                            </Button.Group>
                        )}>
                        <EllipsisOutlined />
                    </Popover>,
                ]}
                extra={id && <FollowButton post={post} />}
            // title={post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null}
            >
                {post.RetweetId && post.Retweet ?
                    (
                        <Card
                            cover={post.Retweet.Images[0] &&
                                <PostImages images={post.Retweet.Images} />}>
                            {/* <div style={{float: 'right'}}>
                            {moment(post.createdAt).startOf('day').fromNow()}
                        </div> */}
                            <Card.Meta
                                avatar={(
                                    <Link href={`/`}
                                        prefetch={false}><a><Avatar>
                                            {/* {post.Retweet.User.nickname[0]} */}
                                        </Avatar></a></Link>
                                )}
                                title={post.Retweet.User.nickname}
                                description={
                                    <PostCardContent
                                        onCancelUpdate={
                                            onCancelUpdate
                                        }
                                        onChangePost={onChangePost}
                                    />
                                }
                            />
                        </Card>
                    ) : (
                        <>
                            {/* <div style={{float: 'right'}}>
                            {moment(post.createdAt).startOf('day').fromNow()}
                        </div> */}
                            <Card.Meta
                                avatar={(
                                    <Link href={`/user/${post.User.id}`}
                                        prefetch={false}><a><Avatar>
                                            {post.User.nickname}
                                        </Avatar></a></Link>
                                )}
                                title={post.User.nickname}
                                description={
                                    <PostCardContent
                                        // onCancelUpdate={
                                        //     onCancelUpdate
                                        // }
                                        // onChangePost={onChangePost}
                                        postData={post.content}
                                    />
                                }
                            />
                        </>
                    )}
            </Card>
            {
                commentFormOpened && (
                    <>
                        <CommentForm post={post} />
                        <List
                            header={`${post.Comments ? post.Comments.length : 0}댓글`}
                            itemLayout='horizontal'
                            dataSource={post.Comments || []}
                            renderItem={(item) => (
                                <li>
                                    <Comment
                                        author={item.User.nickname}
                                        avatar={(
                                            <Link
                                                href={`/user/${item.User.id}`}
                                                prefetch={false}>
                                                <a>
                                                    <Avatar>{item.User.nickname[0]}</Avatar>
                                                </a>
                                            </Link>
                                        )}
                                        content={item.content} />
                                </li>
                            )} />
                    </>
                )
            }
        </CardWrapper >
    );
};
PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        // createdAt: PropTypes.string,
        Comments: PropTypes.arrayOf(PropTypes.any),
        Images: PropTypes.arrayOf(PropTypes.any),
        Likers: PropTypes.arrayOf(PropTypes.object),
        RetweetId: PropTypes.number,
        Retweet: PropTypes.objectOf(PropTypes.any),
    }).isRequired,
};
export default PostCard;