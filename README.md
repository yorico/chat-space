# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique:true|
|email|string|null: false, unique:true|

### Association
- has_many :groups, through: :members
- has_many :members
- has_many :messages

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique:true|

### Association
- has_many :users, through: :members
- has_many :members
- has_many :messages

## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|group|references|null: false, foreign_key: true|
|user|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
