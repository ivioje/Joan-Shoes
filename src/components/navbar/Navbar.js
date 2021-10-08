import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';

import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/logo.jpg';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky" className={classes.appBar} color="inherit">
        <Toolbar>
          {/* <input type="checkbox" id="check" />
          <label for="check" class="checkbtn">
            &#9776;
          </label> */}
          <Typography variant="h6" component={Link} to='/' className={classes.title} color="inherit">
          <img src={logo} alt="Joan shoes" height="25px" className={classes.image} />Joan Shoes
        </Typography>
        <div className={classes.grow} />
        <div>
        <Link to='/shop' >Shop</Link>
        </div>
        <div className={classes.button}>
          <IconButton component={Link} to='/cart' aria-label="Show cart items" color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;

  // const renderMobileMenu = (
  //   <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
  //     <MenuItem>
  //       <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
  //         <Badge badgeContent={totalItems} color="secondary">
  //           <ShoppingCart />
  //         </Badge>
  //       </IconButton>
  //       <p>Cart</p>
  //     </MenuItem>
  //   </Menu>
  // );
