import React, { useState } from "react";
import student from "../images/student.jpg";
import logo from "../images/logo.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import {
    Box,
    Typography,
    CardHeader,
    Avatar,
    IconButton,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Collapse,
    TextField,
    Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import user from "../images/user.jpg";
import MainBox from "../components/ui/MainBox";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));
const Post = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const comments = useSelector((state) => state.cmt.comment);
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handlePost = () => {
        const updCmt = comments;
        updCmt.push({
            img: user,
            name: "Lilac",
            comment: comment,
        });
        dispatch({
            type: "ADD_COMMENT",
            comment: updCmt,
        });
        setComment("");
        console.log(comments);
    };

    const handleDelete = (e, ind) => {
        const updCmt = comments;
        updCmt.splice(ind, 1);
        dispatch({ type: "ADD_COMMENT", comment: updCmt });
    };
    return (
        <MainBox>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar
                            alt="university logo"
                            src={logo}
                            sx={{ width: 93, height: 93 }}
                        />
                    }
                    title={
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            University of Greenwich
                        </Typography>
                    }
                    subheader="3 days ago"
                />
                <CardContent>
                    <Typography paragraph>Dear Students!</Typography>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Rhoncus dolor purus non enim praesent
                        elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum
                        quisque non tellus. Convallis convallis tellus id
                        interdum velit laoreet id donec ultrices. Odio morbi
                        quis commodo odio aenean sed adipiscing. Amet nisl
                        suscipit adipiscing bibendum est ultricies integer quis.
                        Cursus euismod quis viverra nibh cras. Metus vulputate
                        eu scelerisque felis imperdiet proin fermentum leo.
                        Mauris commodo quis imperdiet massa tincidunt. Cras
                        tincidunt lobortis feugiat vivamus at augue. At augue
                        eget arcu dictum varius duis at consectetur lorem. Velit
                        sed ullamcorper morbi tincidunt. Lorem donec massa
                        sapien faucibus et molestie ac.
                    </Typography>
                </CardContent>
                <CardMedia component="img" image={student} alt="Paella dish" />
                <CardActions disableSpacing>
                    <Box className={classes.cmnt}>
                        <Typography variant="caption">
                            {comments.length} comments
                        </Typography>
                    </Box>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardHeader
                        avatar={
                            <Avatar
                                alt="university logo"
                                src={logo}
                                sx={{ width: 93, height: 93 }}
                            />
                        }
                        title={
                            <>
                                <TextField
                                    label="Add a Comment"
                                    fullWidth
                                    value={comment}
                                    inputProps={{
                                        style: {
                                            height: 100,
                                            padding: "0 14px",
                                        },
                                    }}
                                    onChange={(e) => setComment(e.target.value)}
                                />

                                <Button onClick={() => handlePost()}>
                                    Post
                                </Button>
                            </>
                        }
                    />

                    <CardContent>
                        {comments.map((comment, ind) => (
                            <Box sx={{ display: "flex", p: 2 }}>
                                <Avatar
                                    alt="university logo"
                                    src={comment.img}
                                    sx={{ width: 73, height: 73 }}
                                />
                                <Box className={classes.comment}>
                                    <Typography
                                        paragraph
                                        sx={{ fontWeight: 600 }}
                                    >
                                        {comment.name}
                                        <Typography variant="caption">
                                            . 1 week ago
                                        </Typography>
                                    </Typography>

                                    <Typography paragraph>
                                        {comment.comment}
                                    </Typography>
                                </Box>
                                <IconButton sx={{ height: 48 }}>
                                    <DeleteIcon
                                        onClick={(e) => handleDelete(e, ind)}
                                    />
                                </IconButton>
                            </Box>
                        ))}
                    </CardContent>
                </Collapse>
            </Card>
        </MainBox>
    );
};

export default Post;

const useStyles = makeStyles(() => ({
    comment: {
        marginLeft: 20,
        backgroundColor: "#eceff1",
        borderRadius: 30,
        padding: 20,
        color: "grey",
        width: "100%",
    },
    cmnt: {
        padding: 13,
        color: "grey",
        backgroundColor: "lightgrey",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",

        height: 30,
    },
    content: {
        padding: 30,
    },
    txtbox: {
        height: 40,
    },
}));
