# stakeX
A simple betting platform MVP with basic games, wallet and user authentication. This project will serve as a starting point for building a betting platform similar to Stake, with core features implemented in a minimalistic fashion.

## MVP Feature List

### 1. **User Authentication System**
- **Sign Up/ Sign In**: User can create an account with email, password. A username will be created and login can be done from the username.
- **Password Reset**: User can reset the password via email.
- **Profile Management**: User can update basic profile information (username, email, password).

### 2. **Basic Wallet System**
- **Deposit**: User can deposit funds (mock payments for now or crypto wallet).
- **Balance Display**: User can view their current balance.
- **Withdraw**: User can withdraw funds (mocked for MVP)
- **Transaction History**: Display of deposits and withdrawals.


### 3. **Core Betting Games**
- **Dice Roll Game**: User can place bets (amount and wager) on dice roll with random outcomes between 1 to 100 and have winnings based on users bet and outcome of the dice o.
- **Plinko**:

### 4. **Real-time game updates**
- **Websocket/Polling**: Display live game results and update users in real-time

### 5. **Simple UI/UX**
- **Responsive Design**: Accessibility and functionality across desktop
- **Interactive Interface**: User can place bets and view results in an intuitive layout.

### 6. **Basic Admin Panel**  
- **User Management**: Admin can view and manage user accounts and their balance
- **Transaction Monitoring**: Admin can monitor deposits and withdrawals.
- **Game Management**: Admin can control which games are available


## Technologies Used 
- **Frontend**: React.js
-  **Backend**: Node.js, Express.js
-  **Database**: MongoDB
-  **Authentication**: JWT (JSON Web Token)
-  **Deployment**: Heroku, DigitalOcean, AWS
  
