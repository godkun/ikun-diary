export ZSH=$HOME/.oh-my-zsh
ZSH_THEME="robbyrussell"

ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

plugins=(git)

source $ZSH/oh-my-zsh.sh

alias j="autojump"
source /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

export RUSTUP_DIST_SERVER="https://rsproxy.cn"
export RUSTUP_UPDATE_ROOT="https://rsproxy.cn/rustup"
export PATH=$PATH:/Users/kun/softs/bin
export OPENAI_API_KEY=""
export DEEPSEEK_API_KEY=""
export TAURI_PRIVATE_KEY=""
export TAURI_KEY_PASSWORD=""

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/kun/anaconda3/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/kun/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/Users/kun/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="/Users/kun/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<

. "$HOME/.cargo/env"
export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/lib/ruby/gems/3.1.0/bin:$PATH"
export PATH=$PATH:$(go env GOPATH)/bin

export DENO_INSTALL="/Users/kun/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
