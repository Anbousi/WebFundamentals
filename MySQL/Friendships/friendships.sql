SELECT   users.id , users.first_name , users.last_name , user2.first_name as friend_first_name, user2.last_name as friend_last_name 
FROM users 
JOIN friendships 
ON users.id=friendships.user_id
LEFT JOIN users as user2 ON  user2.id = friendships.friend_id
WHERE users.first_name LIKE Eli OR user2.first_name LIKE Eli
-- group by users.id
-- order by max_friends DESC
-- LIMIT 1