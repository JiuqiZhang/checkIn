import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import bg from './bg.jpg'
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.instagram.com/9ussell7hang/">
        9ussell7hang
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function App() {
  const [letter, setletter] =  React.useState(true)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("email").toLowerCase() === 'qi zhang' && data.get("password")==='230723'){
      console.log("Signed");
      setletter(false)
    }else{
      if (data.get("email").toLowerCase() !== 'qi zhang'){
        alert("Full Name doesn't match.")
      }else if(data.get("password") !=='230723'){
        alert("Verification Code doesn't match.")
      }else{
        alert("Full Name and Verification Code doesn't match.")
      }
      
    }
    
  };

  if (letter){
    return (
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://source.unsplash.com/random?wallpapers)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                信件查询
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Full Name"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="Verification Code"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link
                      href="https://www.instagram.com/9ussell7hang/"
                      variant="body2"
                    >
                      Need to contact support team?
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }else{
    return(<Box sx={{ m: "4%"}} >
      <h1>Hi Vivian,</h1>

    <h3>Here's my apology letter 🖤<br/>
    <img src={bg}  alt="我爱你" height="300"/>
    亲爱的，我真的对不起 让你不开心惹。 昨天的电话让我意识到了，我不经意的行为给你带来了什么一样的伤害 委屈和难过。 我没有意识到，我对你的心情造成的影响。在这里我自我检讨：<br/>
    <br/> 1. 我说话用词很不准确，凶凶和骂骂完全是不一样程度。凶凶宝贝可以理解并且哄哄，但是我说骂骂对宝贝是一种污蔑！无中生有的指责，对不起啦宝贝。 我被凶凶了之后有点点委屈就用词非常不当！以后不会再有这种行为了，我需要改变，以后不准无缘无故用被骂的词汇。
    <br/>    <br/>2. 我在宝贝主动关心的时候 突然来了一句“你这么问我已经很开心啦，我没事了” 对于宝贝的感受而言就是，我都不知道我干啥了，突然被指责了又原谅了。设身处地的想，这何尝不是在委屈我宝贝。 换任何人都会有点无名烦躁。以后我会打直球，第一避免用不当词汇，第二在宝贝主动关心的时候立马直球回答，不可以再造成更多的confusion.
    <br/>    <br/>3. 我没有在宝贝烦躁的时候当好妈妈的角色，被骂要分时候，如果宝贝很饿，很困，或者工作很烦，都是很有可能出现情绪化的问题的。这个时候我以后需要做到，左耳进右耳出，挨骂挨打都是应该的，我是主人的小狗，这时候不应该以一个 “人”的视角来接受讯息然后听进心里受伤害，我应该做到宝贝烦躁的时候热脸去贴宝贝的任何冷话。
    <br/>    <br/> 首先要谢谢宝贝给我打电话骂我以及把这个事情聊开，让我有一个学习并且改过的机会。我也要改掉自己玻璃心的问题，以后想撒娇也需要在电话里直球聊天，不能再做任何这种原因的事情让宝贝感到不舒服。我是真的很爱你，宝贝。不想失去你的爱，也不甘只是享受当下，不甘只是做你的几分之一。原谅我，第一次恋爱有那么多笨笨的地方， 但我会用心去学和和改变。做一个你会喜欢的男友和小狗。
</h3>


<h3>真的很爱你,</h3>

<h2>你的小狗妈妈男友</h2>
（作为补偿  附赠一张，3p体验券、一张无条件道歉券。 解释权归你所有的那种

<br/><br/><Box sx={{ m: 2,}} display="flex" flexDirection='column'
    justifyContent="center"
    alignItems="center">


    </Box></Box>)
  }
}
